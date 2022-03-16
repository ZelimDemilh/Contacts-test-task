import React from "react";

const ButtonAddContact = ({ handleAddModalActive, addModalActive }) => {
  return (
    <div>
      <button
        type="button"
        className={`btn btn-outline-${addModalActive ? "danger" : "success"}`}
        onClick={handleAddModalActive}
      >
        {addModalActive ? "Закрыть" : "Добавить"}
      </button>
    </div>
  );
};

export default ButtonAddContact;
