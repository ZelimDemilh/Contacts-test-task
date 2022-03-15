import React from "react";

const Search = ({handleSearchText,searchText}) => {
    return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        className="form-control w-50"
        onChange={(e) => handleSearchText.searchText(e.target.value)}
        value={searchText}
        // onKeyDown={(e) => e.key === "Enter"}
      />
    </div>
  );
};

export default Search;
