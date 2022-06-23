import { store } from "../store/store";
import { useSelector } from "../store/store";

import FilterCountries from "./FilterCountries";

import "../css/Favorites.css";

const Favorites = () => {
  const countries = store.getState().favorites.favorites;
  useSelector(state => state.favorites.favorites);
  return (
    <div className="favs-section">
      {countries && countries.length > 0 && (
        <FilterCountries
          countries={countries}
          fav="remove"
          placeholder="Search for a favorite..."
        />
      )}
    </div>
  );
};

export default Favorites;
