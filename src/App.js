import React from 'react';
import requests from './requests';
import Banner from './components/Banner';
import Row from './components/Row';
import Nav from './components/Nav'
import './App.css';



function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner/>
      {/* Row */}
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title= "Trending NOW" fetchUrl={requests.fetchTrending}/>
      <Row title= "Top Rated" fetchUrl={requests.fetchTrending}/>
      <Row title= "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title= "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title= "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title= "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title= "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      
    </div>
  );
}

export default App; 
