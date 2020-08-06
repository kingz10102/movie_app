import React from 'react';
import Row from './components/Row';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Row title="NETFLIX ORIGINALS"/>
      <Row title= "Trending NOW"/>
      <Row />
    </div>
  );
}

export default App;
