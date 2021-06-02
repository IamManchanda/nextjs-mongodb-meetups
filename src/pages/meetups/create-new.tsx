import NewMeetupForm from "../../components/new-meetup-form/index";
import { useRouter } from "next/router";

function PageCreateNewMeetup() {
  const router = useRouter();

  async function handleAddMeetup(enteredMeetupData) {
    const response = await fetch("/api/meetups", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return <NewMeetupForm onAddMeetup={handleAddMeetup} />;
}

export default PageCreateNewMeetup;
