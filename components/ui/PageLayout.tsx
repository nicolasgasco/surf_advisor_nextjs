import Link from "next/link";
import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

import styles from "./PageLayout.module.scss";

const PageLayout: React.FC = (props) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>SurfAdvisor</h1>
        </Link>
        <MainNavigation />
      </header>
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
