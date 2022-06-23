import { useEffect, useState } from "react";

import Country from "./Country";
import { ICountry } from "../types";

import "../css/Countries.css";
import "../css/Favorites.css";

interface Props {
  countries: ICountry[];
  fav: string;
  placeholder: string;
  region?: string;
}

const FilterCountries: React.FC<Props> = props => {
  const { countries, fav, placeholder, region } = props;

  const [name, setName] = useState("");

  let newSearch = region;
  const message = fav === "remove" ? "favorites" : "countries";
  useEffect(() => {
    setName("");
  }, [newSearch]);

  const filter = (e: React.FormEvent<HTMLInputElement>) => {
    const keyword = (e.target as HTMLInputElement).value;
    setName(keyword);
  };
  let foundCountries = [];
  return (
    <section>
      <div className="container">
        <input
          type="search"
          value={name}
          onChange={filter}
          className="input"
          placeholder={placeholder}
        />
      </div>

      {
        <div>
          {countries &&
            countries.length > 0 &&
            (foundCountries = countries
              .filter(country => {
                return (
                  name === "" ||
                  country.name.toLowerCase().startsWith(name.toLowerCase())
                );
              })
              .map(country => (
                <li key={country.countryCode} className="countries-section">
                  <Country country={country} fav={fav} />
                </li>
              )))}

          {foundCountries.length === 0 && <h2>{`No ${message} Found!`}</h2>}
        </div>
      }
    </section>
  );
};

export default FilterCountries;
