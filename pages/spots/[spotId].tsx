import { MongoClient } from "mongodb";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SurfForecastTable from "../../components/spot-page/surfForecast";
import SpotData from "../../interfaces/spot-data-interface";

const SurfSpotPage: NextPage<{ spotData: SpotData }> = (props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{props.spotData.name} - Spot info</title>
      </Head>
      <h1>{props.spotData.name}</h1>
      <h2>Forecast</h2>
      <SurfForecastTable spotSlug={props.spotData.slug} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@sandbox.1ybr6.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
  );
  const db = client.db();

  const spotsCollection = db.collection(`${process.env.DBCOLLECTION}`);
  const allSpotsSlugs = await spotsCollection
    .find({})
    .project({ slug: 1, _id: 0 })
    .map((spotData) => spotData.slug)
    .toArray();

  client.close();

  const paths: { params: { spotId: string } }[] = allSpotsSlugs.map(
    (slug: string) => {
      return {
        params: { spotId: slug },
      };
    }
  );
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const spotSlug = context.params!.spotId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@sandbox.1ybr6.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
  );
  const db = client.db();

  const spotsCollection = db.collection(`${process.env.DBCOLLECTION}`);

  const rawSpotData = await spotsCollection.find({ slug: spotSlug }).toArray();

  const spotData: SpotData = rawSpotData.map((spot) => {
    return {
      id: spot._id.toString(),
      name: spot.name,
      country: spot.country,
      region: spot.region,
      slug: spot.slug,
    };
  })[0];

  client.close();

  return {
    props: { spotData },
    revalidate: 1000,
  };
};

export default SurfSpotPage;
