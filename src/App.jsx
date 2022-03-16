import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import SingIn from "./components/pages/SingIn";
import Auth from "./hoc/Auth";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="signIn" element={<SingIn />} />
        <Route path="contact/:id" element={<Contact/>} />
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
