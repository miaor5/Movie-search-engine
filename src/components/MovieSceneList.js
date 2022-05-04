import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieResult = props.listData.map((movie, index) => {
    return (
      <li>
        <MovieSceneItem movie={movie} />
      </li>
    );
  });
  return <ul className="list">{movieResult}</ul>;
}
export default MovieSceneList;
