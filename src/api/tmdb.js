const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// 🔥 Trending movies
export const getTrendingMovies= async ()=>{
    const response=await fetch(
        `${BASE_URL}/trending/movie/day/api_key=${API_KEY}`
    )
    return response.json();
}

// 🎬 Latest / Now Playing
export const getLatestMovies = async () => {
    const res = await fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`
    );
    return res.json();
};

// ⭐ Popular
export const getPopularMovies = async () => {
    const res = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    return res.json();
};
