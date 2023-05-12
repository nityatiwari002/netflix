import { useEffect, useState } from "react";
import "../components-style/Header.css";
import Description from "./Description";
import Title from "./Title";
import Buttons from '../components/Buttons';
import axios from "../utilities/axios";
import requests from "../utilities/requests";
import '../App.css';

const imgUrl = "https://image.tmdb.org/t/p/original";

function Header() {
    const urls = Object.values(requests);
    const url = urls[Math.floor(Math.random() * urls.length)];
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function getMovie() {
            const req = await axios.get(url);
            let x = Math.floor(Math.random() * 100) % 20;
            setMovie(req.data.results[x]);
            return url;
        }
        getMovie();
    }, [url]);
    return (
        <header
            className="Header"
            style={{ backgroundImage: `url(${imgUrl}${movie.backdrop_path})` }}
        >
            <div className="overlay" key={movie}>
                <Title content={movie?.title || movie?.name} />
                <Buttons />
                <Description content={movie.overview} />
            <div className="fadeout"></div>
            </div>
        </header>
    );
}

export default Header;
