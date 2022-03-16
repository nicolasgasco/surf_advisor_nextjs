import { useRef } from "react";
import styles from "./MainLandingSelectors.module.scss";

const MainLandingSelectors: React.FC<{ countries: string[] }> = (props) => {
  const countrySelect = useRef(null);

  return (
    <div className={styles["main-landing-selectors-container"]}>
      <h3>Select a spot</h3>
      <div>
        {/* Country */}
        <div>
          <label htmlFor="country">Country:</label>
          <select name="country" id="country" ref={countrySelect}>
            <option selected disabled>
              Country
            </option>
            {props.countries.map((country) => {
              return (
                <option value={country.toLowerCase().replaceAll(" ", "_")}>
                  {country}
                </option>
              );
            })}
          </select>
          <label htmlFor="spot">Country:</label>
          <input type="text" name="spot" id="spot" placeholder="Spot" />
        </div>
      </div>
    </div>
  );
};

export default MainLandingSelectors;
