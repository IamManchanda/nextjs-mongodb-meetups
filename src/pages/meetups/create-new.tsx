import Head from "next/head";
import { useRouter } from "next/router";

import NewMeetupForm from "../../components/new-meetup-form/index";

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

    await response.json();

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Create New Meetup - Next.js Meetups</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
}

export default PageCreateNewMeetup;
