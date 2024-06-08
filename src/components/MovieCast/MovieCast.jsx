import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../tmdb-api-fetch';
import css from './MovieCast.module.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';

export default function MovieCast() {
  const { movieId } = useParams();
  const [credits, setCredits] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        // setIsError(false);
        const data = await getMovieCredits(movieId);
        setCredits(data.cast);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);
console.log('cast', credits);
  return (
    <div>
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      {/* <ul className={css.creditsList}>
        {credits.map(cast => (
          <li key={cast.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w300${cast.profile_path}`}
                alt={cast.name}
              />
            </div>
            <p className={css.name}>{name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
