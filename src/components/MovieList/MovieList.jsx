import MovieCard from '../MovieCard/MovieCard';

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
