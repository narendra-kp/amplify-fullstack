import React, { useState } from 'react';

function Index() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h1>Hello, AWS Amplify!</h1>
      <p>This is a basic React Add function component.</p>
      
      <input 
        type="number" 
        placeholder="Enter first number" 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Enter second number" 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
      />
      <button onClick={handleAddition}>Add</button>
      
      {result !== null && (
        <div>
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
}

export default Index;

