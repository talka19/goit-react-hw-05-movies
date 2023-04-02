import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '22a9e3df8a72c1de22ffe1139812da13';

const fetchTrending = async () => {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
}

const fetchSearchByKeyword = async keyword => {
    const response = await axios.get(`/search/movie?api_key=${API_KEY}&language=en-US&query=${keyword}&page=1&include_adult=false`);
    return response.data.results;
}

const fetchMovieDetalis = async movieId => {
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

const fetchActors = async movieId => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data.cast;
}

const fetchReviews = async movieId => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
}

const Api = {
    fetchTrending,
    fetchSearchByKeyword,
    fetchMovieDetalis,
    fetchActors ,
    fetchReviews,
}

export default Api

