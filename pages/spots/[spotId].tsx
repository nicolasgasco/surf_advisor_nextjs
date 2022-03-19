import { MongoClient } from "mongodb";
import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SpotData from "../../interfaces/spot-data-interface";

const SurfSpotPage: NextPage = () => {
  const router = useRouter();

  return (
    <>
      This is the page for spot {router.query.spotId}
      <link
        href="//www.surf-forecast.com/stylesheets/widget.css"
        media="screen"
        rel="stylesheet"
        type="text/css"
      />
      <div className="wf-width-cont surf-fc-widget">
        <div className="widget-container">
          <div className="external-cont">
            <iframe
              className="surf-fc-i"
              src="//www.surf-forecast.com/breaks/Playade-Ereaga/forecasts/widget/a"
              scrolling="no"
              frameBorder={0}
              marginWidth={0}
              marginHeight={0}
            ></iframe>
            <div className="footer">
              <a className="logo" href="//www.surf-forecast.com/">
                <img
                  src="//www.surf-forecast.com/images/widget.png"
                  alt="Widget"
                  width="1"
                  height="1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@sandbox.1ybr6.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
  );
  const db = client.db();

  const spotsCollection = db.collection(`${process.env.DBCOLLECTION}`);
  const allSpotsIds = await spotsCollection
    .find({})
    .project({ slug: 1, _id: 0 })
    .map((spotData) => spotData.slug)
    .toArray();

  client.close();

  const paths: { params: { spotId: string } }[] = allSpotsIds.map(
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

  const spotData: SpotData[] = rawSpotData.map((spot) => {
    return {
      id: spot._id.toString(),
      name: spot.name,
      country: spot.country,
      region: spot.region,
      slug: spot.slug,
    };
  });

  client.close();

  return {
    props: { spotData },
    revalidate: 600,
  };
};

export default SurfSpotPage;
