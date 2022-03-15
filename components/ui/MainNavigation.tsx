import Link from "next/link";

import styles from "./MainNavigation.module.scss";

const MainNavigation: React.FC = () => {
  return (
    <nav className={styles["main-nav"]}>
      <ul>
        <li>
          <Link href="/spots">Spots</Link>
        </li>
        <li>
          <Link href="/about-me">About me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
