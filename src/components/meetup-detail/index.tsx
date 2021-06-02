import Image from "next/image";

import styles from "./styles.module.scss";

function MeetupDetail({ title, image, address, description }) {
  return (
    <section className={styles.detail}>
      <Image
        src={`https://source.unsplash.com/${image}/640x426`}
        alt={title}
        title={title}
        width="640"
        height="426"
      />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{description}</p>
    </section>
  );
}

export default MeetupDetail;
