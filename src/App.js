import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from './components/Home';
import Login from './components/Login';
import News from './components/News';
import Profile from './components/Profile';
import Navbar from './components/Navbar';


function App() {

  //setting up fake storage
  window.onload = (event) => {
    localStorage.setItem("isLoggedIn", false)
  };

  const [isLogged, setIslogged] = useState(JSON.parse(localStorage.getItem('isLoggedIn')))


  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />

        //conditionally rendering pages for logged users
        <Route path="profile" element={isLogged ? < Profile /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
