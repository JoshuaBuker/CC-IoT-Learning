import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [getResponse, setGetRespose] = useState();
  
  useEffect(() => {
    fetch("http://localhost:3001/")
      .then(x => x.text())
      .then(y => setGetRespose(y));
  }, '');

  return (
    <div className="App">
      {getResponse}
    </div>
  );
}

export default App;
