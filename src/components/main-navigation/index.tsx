import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

function MainNavigation() {
  const { pathname } = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Next.js Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a className={pathname == "/" ? styles.active : ""}>
                All Meetups
              </a>
            </Link>
          </li>
          <li>
            <Link href="/meetups/create-new">
              <a
                className={
                  pathname == "/meetups/create-new" ? styles.active : ""
                }
              >
                Add New Meetup
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
