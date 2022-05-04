import React, { useState, useEffect } from 'react';
import getDataApi from '../services/Api';
import MovieSceneList from './MovieSceneList';
import '../styles/App.scss';

const App = () => {
  const [data, setData] = useState([]);
  // const [searchMovie, setSearchMovie] = useState('');

  // const handleFilterMovie = (value) => {
  //   setSearchMovie(value);
  //   // return setData.filter((person) => {
  //   //   return (
  //   //     person.character.toLowerCase().includes(searchMovie.toLowerCase()) ||
  //   //     person.quote.toLowerCase().includes(searchMovie.toLowerCase())
  //   //   );
  //   // });
  // };
  useEffect(() => {
    getDataApi().then((dataClean) => {
      setData(dataClean);
    });
  }, []);

  return (
    <>
      <h1 className="title">Owen Wilson's "wow"</h1>
      <MovieSceneList listData={data} />
    </>
  );
};

export default App;
