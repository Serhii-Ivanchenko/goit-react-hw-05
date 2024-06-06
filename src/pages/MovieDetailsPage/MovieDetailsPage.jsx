import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../../components/tmdb-api-fetch';

const defaults = {
  poster:
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg',
  title: 'Title not found',
  date: 'XXXX-XX-XX',
  vote: 'XX.XX',
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);
  console.log('movie', movie);

  return (
    <div>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : defaults.poster
        }
        alt={movie.title || defaults.title}
      />
      <h2>{movie.title}</h2>
      <p>User score: {movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
      <p></p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
