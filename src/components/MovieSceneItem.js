function MovieSceneItem(props) {
  return (
    <>
      <img
        className="image"
        src={props.movie.poster}
        alt={props.movie.poster}
      />
      <h3 className="sentence">{props.movie.movieName}</h3>
      <p className="sentence">{props.movie.fullSentence}</p>
    </>
  );
}
export default MovieSceneItem;
