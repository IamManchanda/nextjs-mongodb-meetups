import DUMMY_MEETUPS from "../../../fixtures/dummy-meetups";
import MeetupDetail from "../../../components/meetup-detail/index";

function PageMeetupWithId({ meetup }) {
  const { title, image, address, description } = meetup;

  return (
    <MeetupDetail
      title={title}
      image={image}
      address={address}
      description={description}
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: DUMMY_MEETUPS.map(({ id }) => ({
      params: { id },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;

  return {
    props: {
      meetup: DUMMY_MEETUPS.find((x) => x.id === id),
    },
    revalidate: 1,
  };
}

export default PageMeetupWithId;
