import { store } from "../store/store";

import FilterCountries from "./FilterCountries";

import "../css/Countries.css";

interface Props {
  region: string;
}

const Countries: React.FC<Props> = props => {
  const countries = store
    .getState()
    .countries.countries.filter(country => country.region === props.region);

  return (
    <section>
      <FilterCountries
        countries={countries}
        placeholder="Search for a country..."
        fav="add"
        region={props.region}
      />
    </section>
  );
};

export default Countries;
