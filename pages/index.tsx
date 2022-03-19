import { MongoClient } from "mongodb";
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
      <MainLandingSelectors
        countries={props.countries}
        regions={props.regions}
        spots={props.spots}
      />
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@sandbox.1ybr6.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
  );
  const db = client.db();

  const spotsCollection = db.collection(`${process.env.DBCOLLECTION}`);

  const allSpots = (await spotsCollection.find({}).toArray()).map(
    (spotData) => {
      return {
        name: spotData.name,
        slug: spotData.slug,
        country: spotData.country,
        region: spotData.region,
        id: spotData._id.toString(),
      };
    }
  );

  const allCountries = await spotsCollection.distinct("country");

  const allRegions = await spotsCollection.distinct("region");

  client.close();
  return {
    props: {
      spots: allSpots,
      countries: allCountries,
      regions: allRegions,
    },
    revalidate: 600,
  };
};

export default HomePage;
