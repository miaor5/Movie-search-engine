import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import getDataApi from '../services/Api';
import MovieSceneList from './MovieSceneList';
import '../styles/App.scss';
import Filters from './Filters';
import MovieSceneDetail from './MovieSceneDetail';
import ls from '../services/LocalStorage';

const App = () => {
  const [data, setData] = useState(ls.get('movie', []));
  const [searchMovie, setSearchMovie] = useState('');
  const [filterYears, setFilterYears] = useState(0);

  const handleFilterYear = (value) => {
    setFilterYears(parseInt(value));
  };
  const handleFilterMovie = (value) => {
    setSearchMovie(value);
  };
  //asi llamamos al API que esta en sercivios
  useEffect(() => {
    if (data.length === 0) {
      getDataApi().then((dataClean) => {
        setData(dataClean);
      });
    }
  }, []);
  //Guardamos los datos en el local storage en un useEffect, para que esten disponible para arrancar la pagina.?????
  useEffect(() => {
    ls.set('movie', data);
  }, [data]);

  //Esta función crea la lista de las options, y la sugunda parte de esta funcion me aseguro de que no se repitan los años
  const getYear = () => {
    const movieYear = data.map((movie) => movie.year);
    const uniqueYear = movieYear.filter((year, index) => {
      return movieYear.indexOf(year) === index;
    });
    return uniqueYear;
  };
  //Aqui tengo todos los filtros de la pagina

  const movieFilters = data
    //este es para que cuando este en seleccione , aparezcan todas las peliculas en el apartado de años.
    .filter((movie) => {
      if (filterYears === 0) {
        return true;
      } else {
        return movie.year === filterYears;
      }
    })
    //este es el filtro de el input de texto para el nombre de la pelicula
    .filter((movie) => {
      return movie.movieName.toLowerCase().includes(searchMovie.toLowerCase());
    })
    //este es el filtro de los años
    .filter((movie) => {
      if (filterYears === 0) {
        return true;
      } else {
        return filterYears === movie.year;
      }
    })
    //ordenar alfabeticamnete el array
    .sort(function (a, b) {
      var nameA = a.movieName.toUpperCase();
      var nameB = b.movieName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

  ///AQUI ESTAN LAS ROUTES
  const { pathname } = useLocation();
  const dataPath = matchPath('/movie/:movieId', pathname);
  //aqui heemos añadido un condicional, porque sino no salia
  const movieId = dataPath !== null ? dataPath.params.movieId : null;
  const movieFound = data.find((movie) => movie.id === movieId);

  return (
    <>
      <h1 className="title">Owen Wilson's "wow"</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filters
                searchMovie={searchMovie}
                handleFilterMovie={handleFilterMovie}
                getYear={getYear()}
                handleFilterYear={handleFilterYear}
                filterYears={filterYears}
              />
              <MovieSceneList
                movieFilters={movieFilters}
                searchMovie={searchMovie}
              />
            </>
          }
        />
        <Route
          path="/movie/:movieId"
          element={<MovieSceneDetail movie={movieFound} />}
        />
      </Routes>
    </>
  );
};

export default App;
