import { DUMMY_MEETUP_SINGLE_ITEM } from "../../../fixtures/dummy-meetups";
import MeetupDetail from "../../../components/meetup-detail/index";

function PageMeetupWithId() {
  const { title, image, address, description } = DUMMY_MEETUP_SINGLE_ITEM;

  return (
    <MeetupDetail
      title={title}
      image={image}
      address={address}
      description={description}
    />
  );
}

export default PageMeetupWithId;
