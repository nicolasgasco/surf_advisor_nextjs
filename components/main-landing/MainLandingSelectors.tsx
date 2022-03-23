import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./MainLandingSelectors.module.scss";
import SpotData from "../../interfaces/spot-data-interface";
import SelectInput from "../lib/SelectInput";

// Given a specific country, get all regions for that country
const getRegionsOfCountry = (spots: SpotData[], country: string) => {
  return (
    spots
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

// Given a specific region, get all spots for that region
const getSpotsOfRegion = (spots: SpotData[], region: string) => {
  return spots
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

const MainLandingSelectors: React.FC<{
  countries: string[];
  regions: string[];
  spots: SpotData[];
}> = (props) => {
  const router = useRouter();

  // Selectors states
  const [selectedCountry, setSelectedCountry] = useState("spain");
  const [selectedRegion, setSelectRegion] = useState("euskadi");
  const [selectedSpot, setSelectedSpot] = useState(
    getSpotsOfRegion(props.spots, selectedRegion)[0].slug
  );

  useEffect(() => {
    setSelectedCountry("spain");
    setSelectRegion("euskadi");
    setSelectedSpot(getSpotsOfRegion(props.spots, selectedRegion)[0].slug);
  }, []);

  const onChangeCountryHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    const firstRegion = getRegionsOfCountry(
      props.spots,
      e.target.value
    )[0].region.toLowerCase();
    setSelectRegion(firstRegion);
    setSelectedSpot(getSpotsOfRegion(props.spots, firstRegion)[0].slug);
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
        <SelectInput
          disabled
          title="Only Spain supported at the moment"
          labelText="Country:"
          selectId="country"
          selectValue={selectedCountry}
          selectOnchange={onChangeCountryHandler}
          options={props.countries.map((country) => {
            return (
              <option
                key={country.toLowerCase().replaceAll(" ", "_")}
                value={country.toLowerCase().replaceAll(" ", "_")}
              >
                {country}
              </option>
            );
          })}
        />
        {/* Region */}
        <SelectInput
          labelText="Region:"
          selectId="region"
          selectValue={selectedRegion}
          selectOnchange={onChangeRegionHandler}
          disabled={selectedCountry === "country"}
          options={getRegionsOfCountry(props.spots, selectedCountry).map(
            (spotData) => {
              return (
                <option
                  key={spotData.region.toLowerCase().replaceAll(" ", "_")}
                  value={spotData.region.toLowerCase().replaceAll(" ", "_")}
                >
                  {spotData.region}
                </option>
              );
            }
          )}
        />
        {/* Spot */}
        <SelectInput
          labelText="Spot:"
          selectId="spot"
          selectValue={selectedSpot}
          selectOnchange={onChangeSpotHandler}
          disabled={selectedRegion === "region"}
          options={getSpotsOfRegion(props.spots, selectedRegion).map(
            (spotData) => {
              return (
                <option key={spotData.slug} value={spotData.slug}>
                  {spotData.name}
                </option>
              );
            }
          )}
        />
        {/* Submit button */}
        <button type="submit">See data</button>
      </form>
    </div>
  );
};

export default MainLandingSelectors;
