import { ObjectID } from "bson";
import { MongoClient } from "mongodb";
import type { GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import MainLandingHero from "../components/main-landing/MainLandingHero";
import MainLandingSelectors from "../components/main-landing/MainLandingSelectors";
import useCollection from "../hooks/use-db-collection";

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
  const [client, spotsCollection = collection] = await useCollection(
    process.env.DBCOLLECTION
  );

  const allSpots = (await spotsCollection.find({}).toArray()).map(
    (spotData: {
      name: string;
      slug: string;
      country: string;
      region: string;
      _id: ObjectID;
    }) => {
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
