import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contactsUpdate } from "../../../store/contactsSlice";

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

  return (
    <div>
      {contacts.map((contact) => {
        return (
          <div key={contact.id} className="card w-50 m-auto">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">
                <small className="text-muted">{contact.phone}</small>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Contacts;
