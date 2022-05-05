import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  console.log(props.movieName);
  // if (props.searchMovie !== props.movieName) {
  //   return <p>no hay</p>;
  // } else {
  const movieResult = props.movieFilters.map((movie, index) => {
    return (
      <>
        <li key={index} className="card">
          <MovieSceneItem movie={movie} />
        </li>
      </>
    );
  });
  return <ul className="list">{movieResult}</ul>;
}
// }
export default MovieSceneList;
