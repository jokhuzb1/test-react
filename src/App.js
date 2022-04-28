import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from './components/Home';
import Login from './components/Login';
import News from './components/News';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAuth } from './store/userSlice';


function App() {
  const userStatus = useSelector((state) => state.user.user.isLogged)
  console.log(userStatus);
  const dispatch = useDispatch()
  const toggleUser = () => {
    dispatch(toggleAuth())
    console.log(userStatus);

  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
        //conditionally rendering pages for logged users

        <Route path="profile" element={userStatus ? < Profile /> : <Login />} />
      </Routes>

    </div>
  );
}

export default App;
