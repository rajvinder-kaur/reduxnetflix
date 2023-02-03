const API_KEY = "dea3ffe68045f1322753aa89f314590b";
const requests ={
    fetchTrending :`/trending/movie/week?api_key=${API_KEY}`,
    fetchHotstarOrignals :`/discover/tv?api_key=${API_KEY}&language=en-US`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDramaMovies :`/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchBanner :`/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
}
export default requests;

