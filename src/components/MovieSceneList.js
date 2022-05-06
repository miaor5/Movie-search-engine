import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieResult = props.movieFilters.map((movie, index) => {
    return (
      <li key={index} className="card">
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return props.movieFilters.length === 0 && props.searchMovie !== '' ? (
    <p>
      No hay ninguna nombre de película que coincida con la palabra{' '}
      {props.searchMovie}
    </p>
  ) : (
    <ul className="list">{movieResult}</ul>
  );
}
export default MovieSceneList;
