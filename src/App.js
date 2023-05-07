import React from "react";
import Header from "./components/Header";
import Row from "./components/Row";
import requests from "./utilities/requests";
import Footer from "./components/Footer"

function App(){
    return (
        <div className="App">
            <Header/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} thumbnail/>
            <Row title="TRENDING" fetchUrl={requests.fetchTrending} thumbnail/>
            <Row title="ACTION" fetchUrl={requests.fetchActionMovies} thumbnail/>
            <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} thumbnail/>
            <Row title="ROMANCE" fetchUrl={requests.fetchRomanceMovies} thumbnail/>
            <Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} thumbnail/>
            <Footer/>


        </div>
    )
}

export default App;