import { useHistory } from 'react-router-dom';

function MovieSceneDetail(props) {
  // const history = useHistory();
  // const handleClick = () => {
  //   history.push('/');
  // };
  // const navigate = useNavigate();
  // navigate('/');
  return (
    <>
      <img
        className="image"
        src={props.movie.poster}
        alt={props.movie.poster}
      />
      <h3 className="sentence">{props.movie.movieName}</h3>
      <p className="sentence">{props.movie.fullSentence}</p>
      <p className="sentence">{props.movie.director}</p>
      <a href={props.movie.audio} target="_blank ">
        El audio de la pelicula
      </a>
      <button>Atras</button>
    </>
  );
}
export default MovieSceneDetail;
