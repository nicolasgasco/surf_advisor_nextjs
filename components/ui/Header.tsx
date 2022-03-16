import Link from "next/link";
import MainNavigation from "./MainNavigation";

import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <h1>SurfAdvisor</h1>
      </Link>
      <MainNavigation />
    </header>
  );
};

export default Header;
