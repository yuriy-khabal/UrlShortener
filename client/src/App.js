import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [body, setBody] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://localhost:7044/Urls/Get");
        const data = await response.json();
        setBody(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {body && JSON.stringify(body)}
      </header>
    </div>
  );
}

export default App;
