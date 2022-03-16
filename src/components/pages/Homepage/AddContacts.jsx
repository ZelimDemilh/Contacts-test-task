import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddNewContact } from "../../../store/contactsSlice";

const AddContacts = () => {
  const [newContact, setNewContact] = useState({ name: "", phone: "" });

  const dispatch = useDispatch();

  const handleNewContact = {
    setName: (name) => {
      setNewContact({ ...newContact, name: name });
    },
    setPhone: (phone) => {
      setNewContact({ ...newContact, phone: phone });
    },
  };

  const handleAddContact = () => {
    dispatch(AddNewContact(newContact));
    setNewContact({ name: "", phone: "" });
  };

  return (
    <div className="d-flex justify-content-sm-evenly w-50 m-auto pb-4 ">
      <input
        type="text"
        className="form-control w-auto"
        onChange={(e) => handleNewContact.setName(e.target.value)}
        value={newContact.name}
        // onKeyDown={(e) => e.key === "Enter"}
        placeholder="name"
      />
      <input
        type="text"
        className="form-control w-auto"
        onChange={(e) => handleNewContact.setPhone(e.target.value)}
        value={newContact.phone}
        // onKeyDown={(e) => e.key === "Enter"}
        placeholder="phone"
      />
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleAddContact}
        disabled={newContact.name === "" || newContact.phone === ""}
      >
        Добавить
      </button>
    </div>
  );
};

export default AddContacts;
