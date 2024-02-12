import React, { useState } from 'react';

function Home() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = parseInt(number1) + parseInt(number2);
    setResult(sum);
  };

  const handleLogout = () => {
    // Your logout logic goes here
    console.log('Logged out');
    localStorage.removeItem('token')
    window.location.reload()

  };

  return (
    <div>
      {/* Navbar */}
      <nav style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
        <button onClick={handleLogout}>Logout</button>
      </nav>

      {/* Content */}
      <div style={{ marginTop: '6rem' ,marginLeft:'30%',}}>
        {/* Input fields */}
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        {/* Equal button */}
        <button onClick={handleAddition}>=</button>
        {/* Result */}
        <div style={{ marginTop: '1rem' }}>
          Result: {result}
        </div>
      </div>
    </div>
  );
}

export default Home;
