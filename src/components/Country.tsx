import { useState } from "react";
import { useDispatch } from "react-redux";
import { AiTwotoneStar } from "react-icons/ai";

import { ICountry } from "../types";
import { addFav, removeFav } from "../store/favoriteSlice";

import "../css/Country.css";

interface Props {
  country: ICountry;
  fav: string;
}

const Country: React.FC<Props> = props => {
  const [showCountry, setShowCountry] = useState(false);
  const {
    countryCode,
    name,
    flags,
    population,
    region,
    capital,
    borders,
    languages,
    currencies,
  } = props.country;

  const dispatch = useDispatch();

  const favButton = props.fav === "remove" ? "x" : <AiTwotoneStar />;

  const addFavHandler = () => {
    if (props.fav === "add") {
      dispatch(addFav(props.country));
    } else {
      dispatch(removeFav(props.country.countryCode));
    }
  };

  const toggleShow = () => {
    setShowCountry(prevShowCountry => !prevShowCountry);
  };
  return (
    <div className="country">
      <div className="country-info">
        <div className="country-flag">
          <img src={flags.png} alt={name} />
        </div>

        <h3>{name}</h3>

        <div>
          <button onClick={addFavHandler}>{favButton}</button>
        </div>
        <button onClick={toggleShow}>
          {!showCountry ? "Show more" : "Hide"}
        </button>
        {showCountry && (
          <div>
            <p>
              Capital: <span>{capital}</span>
            </p>

            <p>
              Population: <span>{population.toLocaleString(undefined)}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>

            {languages && (
              <div className="country-list">
                <p>Languages:</p>
                <ul>
                  {languages.map(language => (
                    <li key={language.name}>{language.name}</li>
                  ))}
                </ul>
              </div>
            )}

            {borders && (
              <div className="country-list">
                <p>Borders:</p>
                <ul className="borders">
                  {borders.map(border => (
                    <li key={border}>{border}</li>
                  ))}
                </ul>
              </div>
            )}

            {currencies && (
              <div className="country-list">
                <p>Currencies:</p>
                <ul>
                  {currencies.map(currency => (
                    <li key={currency.name}>{currency.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Country;
