const SurfForecastTable: React.FC<{ spotSlug: string }> = (props) => {
  return (
    <div>
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
              src={`//www.surf-forecast.com/breaks/${props.spotSlug}/forecasts/widget/a`}
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
    </div>
  );
};

export default SurfForecastTable;
