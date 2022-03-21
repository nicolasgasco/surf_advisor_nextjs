import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./MainNavigation.module.scss";

const MainNavigation: React.FC = () => {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <nav className={styles["main-nav"]}>
      <ul>
      <li className={router.pathname === "/spots" ? styles.active : ""}>
          <Link href="/spots">Spots</Link>
        </li>
        <li className={router.pathname === "/about-me" ? styles.active : ""}>
          <Link href="/about-me">About me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
