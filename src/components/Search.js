import React, { useRef, useState } from "react";
import Table from "./Table";

const Search = ({ data }) => {
  const ref = useRef(null);

  const [value, setValue] = useState("");
  const [isInputInFocus, setIsInputInFocus] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  const searchCountry = (searchTerm) => {
    let res = [];
    if (searchTerm) {
      res = data.filter((item) =>
        item?.country?.toLowerCase().trim().includes(searchTerm.trim())
      );
    }

    setSearchResult(res);
  };

  const handleOnChange = (e) => {
    const searchTerm = e.target.value;
    setValue(searchTerm);
    searchCountry(searchTerm);
  };

  const focusOnInput = () => {
    ref.current.focus();
  };

  return (
    <section className="search_wrapper">
      <div
        className="search"
        onClick={() => setIsInputInFocus(true)}
        onBlur={() => setIsInputInFocus(false)}
      >
        <input
          ref={ref}
          type="text"
          className="search_input"
          placeholder="Search By Country"
          value={value}
          onChange={handleOnChange}
        />
        <i className="fa fa-search search_icon" onClick={focusOnInput} />
      </div>
      <div
        className={`search_result table_wrapper ${
          isInputInFocus && searchResult.length ? "visible" : ""
        }`}
      >
        <Table data={searchResult} />
      </div>
    </section>
  );
};

export default Search;
