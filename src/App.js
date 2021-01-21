import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);


  return (
    <div style={{textAlign: 'center'}}>
      <h1>You have clicked {count} times.</h1>
      <button onClick={() => setCount(count - 1)}>Decrease -</button> 
      <button onClick={() => setCount(0)}>Reset</button>   
      <button onClick={() => setCount(count + 1)}>Increase +</button>
    </div>
  );
}

export default App;
