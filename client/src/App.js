import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/homePage";
import LogIn from "./components/logIn"
import SignUp from "./components/signUp"
import "./App.css"
function App() {
  return (
    <Router>

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
