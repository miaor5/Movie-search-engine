import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieResult = props.movieFilters.map((movie, index) => {
    return (
      <li key={index}>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return <ul className="list">{movieResult}</ul>;
}
export default MovieSceneList;
