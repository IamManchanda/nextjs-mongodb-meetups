import { v4 as uuidv4 } from "uuid";

const DUMMY_MEETUPS = [
  {
    id: uuidv4(),
    title: "A First Meetup",
    image: "wn7dOzUh3Rs",
    address: "Some Address 5, 12345 Some City",
    description: "This is a First Meetup!",
  },
  {
    id: uuidv4(),
    title: "A Second Meetup",
    image: "1-aA2Fadydc",
    address: "Some Address 10, 123345 Some City",
    description: "This is a Second Meetup!",
  },
];

export default DUMMY_MEETUPS;
