const API_KEY = "9e48e46941b49cb1566bd41c28833612";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movies/top_rated?api_key=${API_KEY}&language=en-US`
}

export default requests;