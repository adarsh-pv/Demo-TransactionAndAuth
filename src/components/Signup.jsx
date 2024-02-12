
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLogin,setIsLogin] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(formData); 
    const response = await axios.post(`http://localhost:5000/api/register`,formData)
    const {data} = response
    if(data?.data === 'User registered successfully'){
        window.alert("sucessfully signuped")
        
        setIsLogin(true)
    }
    setFormData({
      username: '',
      password: ''
    });
  };
  const handleLogin = async () =>{
    const response = await axios.post(`http://localhost:5000/api/login`,formData)
    const {data} = response
    console.log(data,"data");
    if(data?.token){
        localStorage.setItem("token",data?.token)
       console.log(data?.token);
        window.alert("logined sucessfully")
        window.location.reload()
        setFormData({
            username: '',
            password: ''
          });
    }
  }

  return (
    <div style={centeredDiv}>
      <div style={signupFormContainer}>
        <h2>Sign Up</h2>
        {/* <form onSubmit={handleSubmit}> */}
          <div style={formGroup}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={formGroup}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} />
          </div>
          {isLogin ?
          <Link to="/home"> <button type="submit" onClick={()=>handleLogin()} style={submitButton}>Login</button></Link>:
         <button type="submit"  onClick={()=>handleSubmit()}  style={submitButton}>Sign Up</button>
          
        }
       {!isLogin && <Link to="/forgot-password">Forgot password</Link>}
       {isLogin && <Link onClick={()=>{setIsLogin(false)}}>Signup</Link>} <br/>
       {!isLogin && <Link  onClick={()=>{setIsLogin(true)}}>Login</Link>}

        {/* </form> */}
      </div>
    </div>
  );
}

// Styles
const centeredDiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Adjust height as needed
};

const signupFormContainer = {
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const formGroup = {
  marginBottom: '15px',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const submitButton = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default SignupForm;
