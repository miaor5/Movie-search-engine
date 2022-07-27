import { Link } from 'react-router-dom';
function MovieSceneDetail(props) {
  return (
    <div className="detailCard">
      <img
        className="imageDetail"
        src={props.movie.poster}
        alt={props.movie.poster}
      />
      <div className="textDetail">
        <h3 className="titleDetail">{props.movie.movieName}</h3>
        <p className="fullSentence">{props.movie.fullSentence}</p>
        <p className="director">{props.movie.director}</p>
        <nav className="links">
          <a className="audio" href={props.movie.audio} target="_blank ">
            The audio of the movie
          </a>
          <Link to="/" className="arrow">
            <props.FaArrowCircleLeft />
          </Link>
        </nav>
      </div>
    </div>
  );
}
export default MovieSceneDetail;
