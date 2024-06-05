import { useEffect } from 'react';
import './App.css';
import { getMovieByQuery, getMovieCredits, getMovieDetails, getMovieReviews, getTrendingMovies } from '../tmdb-api-fetch';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

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

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
