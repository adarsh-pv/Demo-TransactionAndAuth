
import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



function ForgotPassword() {

  const [formData, setFormData] = useState({
    username:'',
    oldPassword:'',
    newPassword:''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
const handleChangePassword =async () =>{
    try {
        
        console.log(formData);
        const response = await axios.post(`http://localhost:5000/api/change-password`,formData)
        console.log(response);
        if(response.data){
          console.log(response?.data);
          window.alert(response.data)
        }
    } catch (error) {
        console.log(error);
    }
}

 
 

  return (
    <div style={centeredDiv}>
      <div style={signupFormContainer}>
        <h2>Forgot Password</h2>
        {/* <form onSubmit={handleSubmit}> */}
          <div style={formGroup}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={formGroup}>
            <label htmlFor="password">Old Password:</label>
            <input type="password" id="oldPassword" name="oldPassword" value={formData.password} onChange={handleChange} style={inputStyle} />
          </div>
          <div style={formGroup}>
            <label>New Password:</label>
            <input type="password" id="newPassword" name="newPassword" value={formData.password} onChange={handleChange} style={inputStyle} />
          </div>
     
          <button type="submit" onClick={()=>handleChangePassword()} style={submitButton}>Done</button>
         <Link to="/">Login</Link> 
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

export default ForgotPassword;
