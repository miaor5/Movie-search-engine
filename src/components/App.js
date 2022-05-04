import React, { useState, useEffect } from 'react';
import getDataApi from '../services/Api';
import MovieSceneList from './MovieSceneList';
import '../styles/App.scss';
import Filters from './Filters';

const App = () => {
  const [data, setData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');

  const handleFilterMovie = (value) => {
    setSearchMovie(value);
  };
  useEffect(() => {
    getDataApi().then((dataClean) => {
      setData(dataClean);
    });
  }, []);

  return (
    <>
      <h1 className="title">Owen Wilson's "wow"</h1>
      <Filters handleFilterMovie={handleFilterMovie} />
      <MovieSceneList listData={data} searchMovie={searchMovie} />
    </>
  );
};

export default App;
