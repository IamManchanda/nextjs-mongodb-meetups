import { MongoClient } from "mongodb";

async function handleApiMeetups(req, res) {
  switch (req.method) {
    case "POST":
      const data = req.body;

      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);
      console.log(result);

      client.close();

      return res.status(201).json({
        message: "Meetup Inserted!",
      });

    default:
      return res.status(400).json({
        message: "Something went Wrong!",
      });
  }
}

export default handleApiMeetups;
