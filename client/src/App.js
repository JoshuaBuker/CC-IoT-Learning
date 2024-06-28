import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Doors from './pages/Doors';
import Inventory from './pages/Inventory';
import Overview from './pages/Overview';
import Players from './pages/Players';
import Turtles from './pages/Turtles';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={Overview()}/>
          <Route path='/players' element={Players()}/>
          <Route path='/inventory' element={Inventory()}/>
          <Route path='/turtles' element={Turtles()}/>
          <Route path='/doors' element={Doors()}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
