import type { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

import styles from "../styles/Home.module.scss";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const HomePage: NextPage = () => {
  return (
    <main>
      <h1>This is the main landing page</h1>
    </main>
  );
};

export default HomePage;
