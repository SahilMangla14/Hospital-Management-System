import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "./Screens/Dashboard/DLogin";

function App() {
  return (
    // <div className="ml-3">
    //   Hello world
    // </div>
    <Routes>
      <Route path="/" element={<DLogin />} />
    </Routes>
  );
}

export default App;
