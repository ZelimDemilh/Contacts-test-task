import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {patchContact} from "../../store/contactsSlice";

const Contact = () => {
  const { id } = useParams();

  const contact = useSelector((state) =>
    state.contacts.contacts.find((contact) => contact.id === Number(id))
  );



  const [newDateContact, setNewDateContact] = useState({
      id: id,
    name: contact.name,
    phone: contact.phone,
  });

  const dispatch = useDispatch();

  const handleNewDateContact = {
    setName: (name) => {
      setNewDateContact({ ...newDateContact, name: name });
    },
    setPhone: (phone) => {
      setNewDateContact({ ...newDateContact, phone: phone });
    },
  };

  const handleUpdateContact = () => {
    dispatch(patchContact(newDateContact));
      console.log(newDateContact)
  };

  if (!contact) {
    return <div>ошибка!</div>;
  }

  return (
    <div className="d-flex justify-content-sm-evenly w-50 m-auto pb-4 ">
      <input
        type="text"
        className="form-control w-auto"
        onChange={(e) => handleNewDateContact.setName(e.target.value)}
        value={newDateContact.name}
        // onKeyDown={(e) => e.key === "Enter"}
        placeholder="name"
      />
      <input
        type="text"
        className="form-control w-auto"
        onChange={(e) => handleNewDateContact.setPhone(e.target.value)}
        value={newDateContact.phone}
        // onKeyDown={(e) => e.key === "Enter"}
        placeholder="phone"
      />
      <NavLink
          to="/"
        type="button"
        className="btn btn-outline-success"
        onClick={handleUpdateContact}
      >
        Сохранить
      </NavLink>
    </div>
  );
};

export default Contact;
