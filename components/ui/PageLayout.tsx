import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

import styles from "./PageLayout.module.scss";

const PageLayout: React.FC = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>SurfAdvisor</h1>
        <MainNavigation />
      </header>
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
