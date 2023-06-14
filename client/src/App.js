import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "./Screens/Login/DLogin";
import AddAdmin from './Screens/Dashboard/Admin/AddAdmin';

function App() {
  return (
    // <div className="ml-3">
    //   Hello world
    // </div>
    <Routes>
      <Route path="/" element={<DLogin />} />
      <Route path="/admin" element={<AddAdmin />} />
    </Routes>
  );
}

export default App;
