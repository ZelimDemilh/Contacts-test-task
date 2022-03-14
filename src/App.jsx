import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import SingIn from "./components/pages/SingIn";
import Auth from "./hoc/Auth";

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="signIn" element={<SingIn />} />
        <Route
          path="/"
          element={
            <Auth>
              <HomePage />
            </Auth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
