import MeetupItemsList from "../components/meetup-items-list/index";
import DUMMY_MEETUPS from "../fixtures/dummy-meetups";

function PageIndex({ meetups }) {
  return <MeetupItemsList meetups={meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default PageIndex;
