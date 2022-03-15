import React, {useState} from "react";
import Search from "./Search";
import Contacts from "./Contacts";

const HomePage = () => {

    const [searchText, setSearchText] = useState("zelim");

    const handleSearchText = {
        searchText: (text) => {
            setSearchText(text);
        },
    };

  return (
    <div>
      <Search searchText={ searchText } handleSearchText={ handleSearchText }/>
      <Contacts searchText={ searchText }/>
    </div>
  );
};

export default HomePage;
