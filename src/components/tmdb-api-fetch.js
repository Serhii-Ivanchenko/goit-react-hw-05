import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NThkNTRiMjhhYWMzOGU1MjAxNzMyNTFhYmZjMDBkOSIsInN1YiI6IjY2MTUxNzllNTkwMDg2MDE4NTdmM2JhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KbtdTl48FSEUk_mLBHdGWQ_ysU-MYgVORFYIKsSJ5qQ',
  },
};

export const getTrendingMovies = async (currentPage, time_window = 'week') => {
  const params = {
    language: 'en-US',
    page: currentPage,
  };
  const response = await axios.get(`/trending/movie/${time_window}`, {
    ...options,
    params,
  });
  return response.data;
};

export const getMovieByQuery = async (currentPage, searchQuery) => {
  const params = {
    language: 'en-US',
    query: searchQuery,
    page: currentPage,
  };
  const response = await axios.get(
    'search/movie?include_adult=false&language=en-US&page=1',
    {
      ...options,
      params,
    }
  );
  return response.data;
};

export const getMovieDetails = async (movieId = '940721') => {
  const params = {
    language: 'en-US',
  };
  const response = await axios.get(`/movie/${movieId}`, {
    ...options,
    params,
  });
  return response.data;
};

export const getMovieCredits = async (movieId = '940721') => {
  const params = {
    language: 'en-US',
  };
  const response = await axios.get(`/movie/${movieId}/credits`, {
    ...options,
    params,
  });
  return response.data;
};

export const getMovieReviews = async (movieId = '940721') => {
  const params = {
    language: 'en-US',
  };
  const response = await axios.get(`/movie/${movieId}/reviews`, {
    ...options,
    params,
  });
  return response.data;
};
