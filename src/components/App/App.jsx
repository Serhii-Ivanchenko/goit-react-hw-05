import { useEffect } from 'react';
import './App.css';
import { getMovieByQuery, getMovieCredits, getMovieDetails, getMovieReviews, getTrendingMovies } from '../tmdb-api-fetch';

function App() {
  useEffect(() => {
    async function getData() {
      try {
        const data = await getTrendingMovies();
        console.log(data);
      } catch (error) {}
    }
    getData();
  }, []);

  return <></>;
}

export default App;
