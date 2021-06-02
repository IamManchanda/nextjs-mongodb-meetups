import Image from "next/image";

import UiCard from "../ui-card";
import styles from "./styles.module.scss";

function MeetupItem({ image, title, address }) {
  return (
    <li className={styles.item}>
      <UiCard>
        <div className={styles.image}>
          <Image
            src={`https://source.unsplash.com/${image}/2400x1600`}
            alt={title}
            title={title}
            layout="responsive"
            width="2400"
            height="1600"
          />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button>Show Details</button>
        </div>
      </UiCard>
    </li>
  );
}

export default MeetupItem;
