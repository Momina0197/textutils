import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const [mode, togglemode] = useState('light');
  const toggle = () => {
    if (mode === 'dark') {
      togglemode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Success, Light mode has been enabled", 'success');
    }
    else {
      togglemode('dark');
      document.body.style.backgroundColor = '#01010a';
      showAlert(" Dark mode has been enabled", 'success');
    }

  }

  return (
    <>
        {/* <Router>
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/"
        </Routes>
        </Router> */}
      <Navbar title="TextUtils" about="About us" mode={mode} toggle={toggle} />
      <div className="container my-3">
      <Alert alert={alert} />
       <TextArea mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}


export default App;
