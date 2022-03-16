import type { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import MainLandingHero from "../components/main-landing/MainLandingHero";
import MainLandingSelectors from "../components/main-landing/MainLandingSelectors";

import styles from "../styles/Home.module.scss";

interface Params extends ParsedUrlQuery {
  slug: string;
}

const HomePage: NextPage<{ countries: string[] }> = (props) => {
  return (
    <main>
      <MainLandingHero />
      <MainLandingSelectors countries={props.countries} />
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      countries: ["Spain", "Italy", "Germany"],
    },
    revalidate: 30,
  };
}

export default HomePage;
