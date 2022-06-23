import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const countries = await response.json();
      if (countries) {
        const countryData = countries.map((info: any) => {
          const {
            alpha3Code,
            name,
            capital,
            flags,
            region,
            population,
            languages,
            borders,
            currencies,
          } = info;

          return {
            countryCode: alpha3Code,
            name,
            capital,
            flags,
            region,
            population,
            languages,
            borders,
            currencies,
          };
        });
        setData(countryData);
      } else {
        setData([]);
        setLoading(false);
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { data, loading, error };
};
