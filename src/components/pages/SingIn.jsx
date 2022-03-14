import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/signInSlice";

const SignIn = () => {
  const [personalData, setPersonalData] = useState({});

  const dispatch = useDispatch();

  const error = useSelector((state) => state.signIn.error);

  const token = useSelector((state) => state.signIn.token);

  const handlePersonalData = {
    login: (login) => {
      setPersonalData({ ...personalData, login });
    },
    password: (password) => {
      setPersonalData({ ...personalData, password });
    },
  };

  const navigate = useNavigate();

  token && navigate("/");

  const handleSubmit = async () => {
    dispatch(login(personalData));
  };

  return (
    <div>
      <div className="container">
        <div className="shadow p-5 rounded-3 mt-5 w-50 m-auto">
          <form className="row g-3">
            <div className="col- 12 md-6">
              <label htmlFor="inputLogin" className="form-label">
                Логин
              </label>
              <input
                onChange={(e) => handlePersonalData.login(e.target.value)}
                type="text"
                className="form-control"
                id="inputLogin"
              />
            </div>
            <div className="col-12 md-6">
              <label htmlFor="inputPassword" className="form-label">
                Пароль
              </label>
              <input
                onChange={(e) => handlePersonalData.password(e.target.value)}
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
            {error && <div>иди учи пароли</div>}
            <div style={{ color: "red" }}>{error}</div>
            <div className="col-12">
              <button
                onClick={handleSubmit}
                type="button"
                className="btn btn-primary"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
