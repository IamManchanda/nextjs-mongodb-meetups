import Head from "next/head";
import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../../components/meetup-detail/index";

function PageMeetupWithId({ meetup }) {
  const { title, image, address, description } = meetup;

  return (
    <>
      <Head>
        <title>{title} - Next.js Meetups</title>
        <meta name="description" content={description} />
      </Head>
      <MeetupDetail
        title={title}
        image={image}
        address={address}
        description={description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // @ts-ignore
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: meetups.map(({ _id }) => ({
      params: {
        id: _id.toString(),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // @ts-ignore
  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(id),
  });
  const { title, image, address, description } = selectedMeetup;
  client.close();

  return {
    props: {
      meetup: {
        title,
        image,
        address,
        description,
      },
    },
    revalidate: 1,
  };
}

export default PageMeetupWithId;
