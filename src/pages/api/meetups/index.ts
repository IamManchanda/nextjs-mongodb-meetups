function handleApiMeetups(req, res) {
  switch (req.method) {
    case "POST":
      const { title, image, address, description } = req.body;

      return;

    default:
      return res.status(400).json({
        message: "Something went Wrong!",
      });
  }
}

export default handleApiMeetups;
