import type { NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import MainLandingHero from "../components/main-landing/MainLandingHero";

import styles from "../styles/Home.module.scss";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const HomePage: NextPage = () => {
  return (
    <main>
      <MainLandingHero />
    </main>
  );
};

export default HomePage;
