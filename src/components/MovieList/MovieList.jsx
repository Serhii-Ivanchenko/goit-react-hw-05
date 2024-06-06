import MovieCard from '../MovieCard/MovieCard';

export default function MovieList({ movies }) {
  console.log(movies);
  return (
    <div>
      <h2>Trending movies this week</h2>
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
