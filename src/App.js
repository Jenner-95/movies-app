import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <Row title="Popular on Netflix"/>
      <Row title="Recently Watched"/>
    </div>
  );
}

export default App;
