import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsUpdate, deleteContact } from "../../../store/contactsSlice";

const Contacts = ({ searchText }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsUpdate());
  }, [dispatch]);

  const contacts = useSelector((state) =>
    state.contacts.contacts.filter((contact) =>
        contact.name.includes(searchText)
    )
  );

  const handleDeleteContact = (contactID) => {
    dispatch(deleteContact(contactID))
  }

  return (
    <div>
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="d-flex w-50 m-auto align-items-center">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">
                <small className="text-muted">{contact.phone}</small>
              </p>
            </div>
            <div>
              <button
                  type="button"
                  className="btn btn-outline-danger "
              onClick={()=> handleDeleteContact(contact.id)}>
                Удалить
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
