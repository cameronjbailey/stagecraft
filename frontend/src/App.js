import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('https://stagecraft-330z.onrender.com/api/welcome')
      .then(response => response.text())
      .then(data => setMessage(data));
  }, []);
  
  return (
    <div className="App">
      <h1>StageCraft Preview</h1>
      <p>Humble beginnings for testing practice.</p>
      <p>New content and features are coming soon.</p>
      <p>{message}</p>
    </div>
  );
}

export default App;
