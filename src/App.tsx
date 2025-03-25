import React, { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Laravel API
    fetch('http://127.0.0.1:8000/api/data')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React + Laravel API</h1>
      <p>{message ? message : 'Loading...'}</p>
    </div>
  );
};

export default App;
