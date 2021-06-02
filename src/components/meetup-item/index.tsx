import Image from "next/image";
import { useRouter } from "next/router";

import UiCard from "../ui-card";
import styles from "./styles.module.scss";

function MeetupItem({ id, image, title, address }) {
  const router = useRouter();

  function handleShowDetails() {
    router.push(`/meetup/${id}`);
  }

  return (
    <li className={styles.item}>
      <UiCard>
        <div className={styles.image}>
          <Image
            src={`https://source.unsplash.com/${image}/640x426`}
            alt={title}
            title={title}
            width="640"
            height="426"
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={handleShowDetails}>Show Details</button>
        </div>
      </UiCard>
    </li>
  );
}

export default MeetupItem;
