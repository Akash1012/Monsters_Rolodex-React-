import React from "react";

import "./searchBox.css";

const SearchBox = props => {
  const { callSearch, placeholder } = props;
  return (
    <React.Fragment>
      <input
        className="search"
        type="text"
        name="searchField"
        placeholder={placeholder}
        onChange={callSearch}
      />
    </React.Fragment>
  );
};

export default SearchBox;
