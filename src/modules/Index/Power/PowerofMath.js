import React, { useState } from 'react';

const PowerOfMath = () => {
  const [base, setBase] = useState('');
  const [exponent, setExponent] = useState('');
  const [result, setResult] = useState(null); 
  const [error, setError] = useState(null);

  const callAPI = async (base, exponent) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "base": base, "exponent": exponent }),
    };

    try {
      const response = await fetch('https://bs8lcu33yf.execute-api.ap-south-1.amazonaws.com/dev', options);
      
      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data.body); // Assuming the API returns the result in the 'result' key
      console.log(data); // Print the response to the console
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to calculate. Please try again.');
    }
  }

  return (
    <div style={{ backgroundColor: '#222629', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ color: '#FFFFFF', fontFamily: 'system-ui', marginLeft: '20px' }}>
        TO THE POWER OF MATH!
      </h1>
      <div>
        <label style={{ color: '#86C232', fontFamily: 'system-ui', fontSize: '20px', marginLeft: '20px', display: 'block', marginTop: '20px' }}>
          Base number:
          <input
            type="text"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            style={{
              color: '#222629',
              fontFamily: 'system-ui',
              fontSize: '20px',
              marginLeft: '10px',
              width: '100px'
            }}
          />
        </label>
        <label style={{ color: '#86C232', fontFamily: 'system-ui', fontSize: '20px', marginLeft: '20px', display: 'block', marginTop: '20px' }}>
          ...to the power of:
          <input
            type="text"
            value={exponent}
            onChange={(e) => setExponent(e.target.value)}
            style={{
              color: '#222629',
              fontFamily: 'system-ui',
              fontSize: '20px',
              marginLeft: '10px',
              width: '100px'
            }}
          />
        </label>
        <button
          onClick={() => callAPI(base, exponent)}
          style={{
            backgroundColor: '#86C232',
            borderColor: '#86C232',
            color: '#FFFFFF',
            fontFamily: 'system-ui',
            fontSize: '20px',
            fontWeight: 'bold',
            marginLeft: '30px',
            marginTop: '20px',
            width: '140px',
            padding: '10px'
          }}
        >
          CALCULATE
        </button>

        {result && (
          <div style={{ color: '#86C232', marginTop: '20px', fontFamily: 'system-ui', fontSize: '20px' }}>
            Result: {result}
          </div>
        )}

        {error && (
          <div style={{ color: 'red', marginTop: '20px', fontFamily: 'system-ui', fontSize: '20px' }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default PowerOfMath;
