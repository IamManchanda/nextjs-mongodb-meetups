import NewMeetupForm from "../../components/new-meetup-form/index";

function PageCreateNewMeetup() {
  function handleAddMeetup(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}

export default PageCreateNewMeetup;
