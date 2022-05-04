import MovieSceneItem from './MovieSceneItem';

function MovieSceneList(props) {
  const movieResult = props.listData

    .filter((movie) => {
      return movie.movieName
        .toLowerCase()
        .includes(props.searchMovie.toLowerCase());
    })

    .map((movie, index) => {
      return (
        <li>
          <MovieSceneItem movie={movie} />
        </li>
      );
    });
  return <ul className="list">{movieResult}</ul>;
}
export default MovieSceneList;
