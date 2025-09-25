import React, { useState } from 'react';
import './App.css';
import {TextField, Button} from "@mui/material";
function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [sum, setSum] = useState(null);
  const [error, setError] = useState('');

  const handleSum = async () => {
    try {
      const response = await fetch('http://localhost:8080/sum-2-numbers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number1: parseInt(number1), number2: parseInt(number2) }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSum(data.sum);
      setError('');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to fetch sum from the server.');
      setSum(null);
    }
  };

  

  return (
    <div>
        <h1>Sum Calculator</h1>
        <div>
          <TextField
                width="200px"
                size="small"
                height="36px"
                label="Number1"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}       
          >
          </TextField>
          <TextField
                width="200px"
                size="small"
                height="36px"
                label="Number2"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
          >
            

          </TextField>
          
        </div>
        <Button 
          variant="contained"
          onClick={handleSum}
        >
          Calculate Sum

        </Button>
        {sum !== null && <h2>The sum is: {sum}</h2>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
   
    </div>
  );
}

export default App;