import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./MainLandingSelectors.module.scss";

const MainLandingSelectors: React.FC<{
  countries: string[];
  regions: string[];
  spots: {
    name: string;
    slug: string;
    country: string;
    region: string;
    id: string;
  }[];
}> = (props) => {
  const getRegionsOfCountry = (country: string) => {
    return (
      props.spots
        // Filtering per country
        .filter((spotData) => {
          return (
            spotData.country.toLowerCase().replaceAll(" ", "_") ===
            country.toLowerCase()
          );
        })
        // Sorting alphabetically
        .sort((a, b) => {
          return a.region < b.region ? -1 : 1;
        })
        // Removing duplicates
        .filter((spotData, index, spotsArray) => {
          if (index === 0) {
            return true;
          } else {
            return spotData.region !== spotsArray[index - 1].region;
          }
        })
    );
  };

  const getSpotsOfRegion = (region: string) => {
    return props.spots
      .filter((spotData) => {
        return (
          spotData.region.toLowerCase().replaceAll(" ", "_") ===
          region.toLowerCase()
        );
      })
      .sort((a, b) => {
        return a.name < b.name ? -1 : 1;
      });
  };

  const [selectedCountry, setSelectedCountry] = useState(props.countries[0]);
  const [selectedRegion, setSelectRegion] = useState(
    getRegionsOfCountry(selectedCountry)[0].region.toLowerCase()
  );
  const [selectedSpot, setSelectedSpot] = useState(getSpotsOfRegion(selectedRegion)[0].slug);
  const router = useRouter();

  const onChangeCountryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    const firstRegion = getRegionsOfCountry(
      e.target.value
    )[0].region.toLowerCase();
    setSelectRegion(firstRegion);
    setSelectedSpot(getSpotsOfRegion(firstRegion)[0].slug.toLowerCase());
  };

  const onChangeRegionHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectRegion(e.target.value);
  };

  const onChangeSpotHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpot(e.target.value);
  };

  const spotSelectorSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/spots/${selectedSpot}`);
  };

  return (
    <div className={styles["main-landing-selectors-container"]}>
      <h3>Find spot</h3>
      <form
        className={styles["country-region-spot-selector"]}
        onSubmit={spotSelectorSubmitHandler}
      >
        {/* Country */}
        <label htmlFor="country">Country:</label>
        <select
          name="country"
          id="country"
          value={selectedCountry}
          onChange={onChangeCountryHandler}
        >
          {props.countries.map((country) => {
            return (
              <option
                key={country.toLowerCase().replaceAll(" ", "_")}
                value={country.toLowerCase().replaceAll(" ", "_")}
              >
                {country}
              </option>
            );
          })}
        </select>
        {/* Region */}
        <label htmlFor="region">Region:</label>
        <select
          name="region"
          id="region"
          value={selectedRegion}
          onChange={onChangeRegionHandler}
          disabled={selectedCountry === "country"}
        >
          {getRegionsOfCountry(selectedCountry).map((spotData) => {
            return (
              <option
                key={spotData.id}
                value={spotData.region.toLowerCase().replaceAll(" ", "_")}
              >
                {spotData.region}
              </option>
            );
          })}
        </select>
        {/* Spot */}
        <label htmlFor="spot">Spot:</label>
        <select
          name="spot"
          id="spot"
          value={selectedSpot}
          onChange={onChangeSpotHandler}
          disabled={selectedRegion === "region"}
        >
          {getSpotsOfRegion(selectedRegion).map((spotData) => {
            return (
              <option
                key={spotData.slug}
                value={spotData.slug}
              >
                {spotData.name}
              </option>
            );
          })}
        </select>
        {/* Submit button */}
        <button type="submit">See data</button>
      </form>
    </div>
  );
};

export default MainLandingSelectors;
