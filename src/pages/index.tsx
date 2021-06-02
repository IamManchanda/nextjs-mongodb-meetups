import { MongoClient } from "mongodb";

import MeetupItemsList from "../components/meetup-items-list/index";

function PageIndex({ meetups }) {
  return <MeetupItemsList meetups={meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map(({ _id, title, image, address }) => ({
        id: _id.toString(),
        title,
        image,
        address,
      })),
    },
    revalidate: 1,
  };
}

export default PageIndex;
