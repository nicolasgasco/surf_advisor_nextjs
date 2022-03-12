import { NextPage } from "next";
import { useRouter } from "next/router";

const SurfSpotPage: NextPage = () => {
  const router = useRouter();

  const spotId = router.query.spotId;

//   if (spotId !== "1") {
//     router.push("search");
//   }

  return <>This is the page for spot {spotId}</>;
};

export default SurfSpotPage;
