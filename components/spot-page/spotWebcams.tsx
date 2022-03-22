import SpotData from "../../interfaces/spot-data-interface";

const SpotWebcams: React.FC<{ spotData: SpotData }> = (props) => {
  if (!props.spotData.webcam_urls || props.spotData.webcam_urls?.length === 0) {
    return <p>There is no webcam available for this spot.</p>;
  } else {
    return (
      <>
        {props.spotData.webcam_urls?.length &&
          props.spotData.webcam_urls.map((urlObj) => {
            if (urlObj.type === "picture") {
              return <img src={urlObj.url} alt="" />;
            } else {
              return <video src={urlObj.url} />;
            }
          })}
      </>
    );
  }
};

export default SpotWebcams;
