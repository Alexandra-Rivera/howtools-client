// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./assets/components/home/home";
import Main from "./assets/components/main/Main";
import UserProfile from "./assets/components/userProfile/UserProfile";
import LogIn from "./assets/components/logIn/LogIn";
import SignUp from "./assets/components/signUp/SignUp";
import axios from 'axios';

function App() {
  //const [count, setCount] = useState(0)
  axios.defaults.baseURL = 'https://ill-pink-sturgeon-cap.cyclic.app/api';
  axios.defaults.params = {};
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
