const API_KEY = "a8feec689a487fbafc66136c5f7c670a";
// baseURL = https://api.themoviedb.org/3
const requests = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;