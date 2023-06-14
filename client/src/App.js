import './App.css';
import {Route, Routes} from 'react-router-dom'
import React from 'react'
import login from './Screens/Dashboard/login'

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<login/>} />
      </Routes>
    </>
  );
}

export default App;
