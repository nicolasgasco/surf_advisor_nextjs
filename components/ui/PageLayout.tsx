import Footer from "./Footer";
import MainNavigation from "./MainNavigation";

const PageLayout: React.FC = (props) => {
  return (
    <>
      <header>
        <MainNavigation />
      </header>
      {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
