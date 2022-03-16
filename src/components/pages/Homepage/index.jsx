import React, { useState } from "react";
import Search from "./Search";
import Contacts from "./Contacts";
import AddContacts from "./AddContacts";
import ButtonAddContact from "./ButtonAddContact";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [addModalActive, setAddModalActive] = useState(false);

  const handleSearchText = (text) => {
      setSearchText(text);
  };

  const handleAddModalActive = () => {
    setAddModalActive(!addModalActive);
  };

  return (
    <div>
      <div className="d-flex w-50 m-auto py-4">
        <Search searchText={searchText} handleSearchText={handleSearchText} />
        <ButtonAddContact handleAddModalActive={handleAddModalActive} addModalActive={addModalActive}/>
      </div>
        {addModalActive && <AddContacts/>}
      <Contacts searchText={searchText} />
    </div>
  );
};

export default HomePage;
