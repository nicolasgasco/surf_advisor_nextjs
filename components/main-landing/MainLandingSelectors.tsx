import { useRef } from "react";
import styles from "./MainLandingSelectors.module.scss";

const MainLandingSelectors: React.FC = () => {
  const countrySelect = useRef(null);
  const regionSelect = useRef(null);
  const spotSelect = useRef(null);

  return (
    <div className={styles["main-landing-selectors-container"]}>
      {/* Country */}
      <div>
        <label htmlFor="country">Country:</label>
        <select name="country" id="country" ref={countrySelect}>
          <option selected disabled>
            Country
          </option>
          {["Spain", "Other country"].map((country) => {
            return (
              <option value={country.toLowerCase().replaceAll(" ", "_")}>
                {country}
              </option>
            );
          })}
        </select>
      </div>
      {/* Region */}
      <div>
        <label htmlFor="region">Region:</label>
        <select
          name="region"
          id="region"
          ref={regionSelect}
          disabled={countrySelect.current !== null}
        >
          <option selected disabled>
            Region
          </option>
          {["Cantabria", "Euskadi"].map((region) => {
            return (
              <option value={region.toLowerCase().replaceAll(" ", "_")}>
                {region}
              </option>
            );
          })}
        </select>
      </div>
      {/* Spot */}
      <div>
        <label htmlFor="spot">Spot:</label>
        <select
          name="spot"
          id="spot"
          ref={spotSelect}
          disabled={regionSelect.current !== null}
        >
          <option selected disabled>
            Spot
          </option>
          {["La Arena", "Sopelana"].map((spot) => {
            return (
              <option value={spot.toLowerCase().replaceAll(" ", "_")}>
                {spot}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default MainLandingSelectors;
