import { useEffect } from 'react';
import './App.css';
import { getMovieByQuery, getMovieCredits, getMovieDetails, getMovieReviews, getTrendingMovies } from '../tmdb-api-fetch';
import Navigation from '../Navigation/Navigation';

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

  return <>
  <Navigation/>
  </>;
}

export default App;
