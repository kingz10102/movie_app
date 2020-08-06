import React from 'react';
import Row from './components/Row';
import './App.css';
import requests from './requests'


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={}/>
      <Row title= "Trending NOW" fetchUrl={}/>
      <Row />
    </div>
  );
}

export default App;
