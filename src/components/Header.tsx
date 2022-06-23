import { useState } from "react";
import Select from "react-select";

import Countries from "./Countries";

const options = [
  { value: "Africa" },
  { value: "Americas" },
  { value: "Asia" },
  { value: "Europe" },
  { value: "Oceania" },
];

const Header = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <section>
        <Select
          placeholder={"Select a region ..."}
          defaultMenuIsOpen={true}
          options={options}
          getOptionLabel={option => option.value}
          onChange={setSelectedOption}
        />
      </section>

      {!selectedOption && (
        <section>
          <img
            src={process.env.PUBLIC_URL + "images/regions.png"}
            alt="regions"
            width="100%"
          />
        </section>
      )}
      {selectedOption && (
        <Countries region={selectedOption ? selectedOption.value : ""} />
      )}
    </>
  );
};

export default Header;
