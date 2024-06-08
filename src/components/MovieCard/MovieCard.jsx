import { Link } from "react-router-dom";

const defaults = {
  poster:
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg',
  title: 'Title not found',
};

export default function MovieCard({ movie }) {
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
      <div>
        <Link to={`/movies/${movie.id}`}>{movie.title || defaults.title}</Link>
      </div>
    </div>
  );
}
