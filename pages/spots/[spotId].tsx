import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SurfSpotPage: NextPage = () => {
  const router = useRouter();

  return <>This is the page for spot {router.query.spotId}</>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const arr = ["1", "2"];
  const paths = arr.map((slug) => {
    return {
      params: { spotId: slug },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 600,
  };
};

export default SurfSpotPage;
