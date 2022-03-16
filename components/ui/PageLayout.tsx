import Link from "next/link";
import Footer from "./Footer";
import Header from "./Header";
import MainNavigation from "./MainNavigation";

import styles from "./PageLayout.module.scss";

const PageLayout: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
