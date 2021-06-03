import Head from "next/head";
import { MongoClient } from "mongodb";

import MeetupItemsList from "../components/meetup-items-list/index";

function PageIndex({ meetups }) {
  return (
    <>
      <Head>
        <title>All Meetups - Next.js Meetups</title>
        <meta
          name="description"
          content="Browse a Huge list of highly active meetups"
        />
      </Head>
      <MeetupItemsList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups
        .map(({ _id, title, image, address }) => ({
          id: _id.toString(),
          title,
          image,
          address,
        }))
        .reverse(),
    },
    revalidate: 1,
  };
}

export default PageIndex;
