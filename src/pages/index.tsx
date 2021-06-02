import MeetupItemsList from "../components/meetup-items-list/index";
import DUMMY_MEETUPS from "../fixtures/dummy-meetups";

function PageIndex() {
  return <MeetupItemsList meetups={DUMMY_MEETUPS} />;
}

export default PageIndex;
