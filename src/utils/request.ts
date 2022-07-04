export const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const BASE_URL = "https://api.themoviedb.org/3";

// const BASE_ENDPOINT = axios.create({
//    baseURL: BASE_URL,
//    timeout: 5000,
// });

// const requests = {
//    fetchTrending: BASE_ENDPOINT.get(
//       `trending/all/week?api_key=${API_KEY}&language=en-US`
//    ),
//    fetchNetflixOriginals: BASE_ENDPOINT.get(
//       `discover/movie?api_key=${API_KEY}&with_networks=213`
//    ),
//    fetchTopRated: BASE_ENDPOINT.get(
//       `movie/top_rated?api_key=${API_KEY}&language=en-US`
//    ),
//    fetchActionMovies: BASE_ENDPOINT.get(
//       `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`
//    ),
//    fetchComedyMovies: BASE_ENDPOINT.get(
//       `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`
//    ),
//    fetchHorrorMovies: BASE_ENDPOINT.get(
//       `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`
//    ),
//    fetchRomanceMovies: BASE_ENDPOINT.get(
//       `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`
//    ),
//    fetchDocumentaries: BASE_ENDPOINT.get(
//       `discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`
//    ),
// };

const requests = {
   fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginals: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
   fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
   fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
   fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,
   fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
   fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`,
};

export { requests };
