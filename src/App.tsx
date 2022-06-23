import React from "react";
import { useDispatch } from "react-redux";
import { Plane } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import { useFetch } from "./hooks/useFetch";

import { getCountries } from "./store/countrySlice";

import Sidebar from "./components/Sidebar";
import Favorites from "./components/Favorites";
import Header from "./components/Header";

import "./App.css";

const App: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v2/all/"
  );

  const dispatch = useDispatch();
  dispatch(getCountries(data));

  return (
    <>
      <div className="content-container">
        <div className="row">
          <div className="left-panel box">
            <Sidebar width={400} height="100vh">
              {error && <h3 className="error">Error fetching data!</h3>}
              <Favorites />
            </Sidebar>
          </div>

          <div className="right-panel box">
            <Header />
            <section className="spinner">{loading && <Plane />}</section>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
