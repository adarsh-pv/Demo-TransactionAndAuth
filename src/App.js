import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Home from './components/home';


const App = () => {
  const token = localStorage.getItem('token');
  console.log(token,"token");
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={token ? <Home/>:<SignupForm />} />
                <Route exact path="/home" element={token ? <Home/> : <SignupForm/>}/>
                <Route exact path="/forgot-password" element={token ? <ForgotPassword />:<SignupForm/>} />
                {/* <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Homepage />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
