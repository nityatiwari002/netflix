import React, { useEffect, useState } from "react";
import "../components-style/CardCover.css";
import axios from "../utilities/axios";

const imgUrl = "https://image.tmdb.org/t/p/original";

function CardCover(fetchURL) {
    const [movies, setMovies] = useState([]);
    let url = fetchURL.fetchUrl;

    useEffect(() => {
        async function getData() {
            const req = await axios.get(url);
            // console.log(url);
            setMovies(req.data.results);
            // console.log(req);
            return url;
        }
        getData();
    }, [url]);

    // console.table(movies);

    // console.log(fetchURL);
    let thumb = fetchURL.thumb;
    return (
        <div className="cardcover">
            {movies.map((movie) => (
                <div>
                <img
                    key={movie.id}
                    className={thumb === "Y" ? `cardimg thumbimg` : `cardimg`}
                    src={
                        thumb === "Y"
                            ? `${imgUrl}${movie.backdrop_path}`
                            : `${imgUrl}${movie.poster_path}`
                    }
                    alt={movie.title}
                    title={movie.title}
                /> 
                <div className="movie-name" key={movie}>
                    {movie?.title || movie?.name}
                </div>
                
                </div>
            ))}
        </div>
    );
}

export default CardCover;
