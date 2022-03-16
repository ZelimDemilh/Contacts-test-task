import React from "react";

const Search = ({ handleSearchText, searchText }) => {
  return (
    <input
      type="text"
      className="form-control"
      onChange={(e) => handleSearchText(e.target.value)}
      value={searchText}
      // onKeyDown={(e) => e.key === "Enter"}
    />
  );
};

export default Search;
