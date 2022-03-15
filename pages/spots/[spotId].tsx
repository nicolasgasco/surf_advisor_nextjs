import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
              allowTransparency={true}
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
