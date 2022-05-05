import { Link } from 'react-router-dom';
function MovieSceneItem(props) {
  return (
    <Link to={`/movie/${props.movie.id}`} className="no">
      <img
        className="image"
        src={props.movie.poster}
        alt={props.movie.poster}
      />
      <h3 className="movieName">{props.movie.movieName}</h3>
      <p className="sentence">{props.movie.fullSentence}</p>
    </Link>
  );
}
export default MovieSceneItem;
