import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/textForms";
import React, { useState } from "react";
import Alert from "./components/Alert";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#323c48";
      showAlert("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container my-3">
    <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<TextForms showAlert={showAlert} heading="Enter your text here" mode={mode}/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  );
  }
export default App;
