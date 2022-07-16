import axios from 'axios';

// action type constants
const CREATE_MOVIE = 'CREATE_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const SET_MOVIES = 'SET_MOVIES';

// action creators
const _createMovie = (movie) => {
  return {
    type: CREATE_MOVIE,
    movie,
  };
};

const _deleteMovie = (movie) => {
  return {
    type: DELETE_MOVIE,
    movie,
  };
};

const _setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    movies,
  };
};

// THUNK CREATORS

export const createMovie = (movie) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/movies', movie);
    dispatch(_createMovie(created));
  };
};

export const fetchMovies= () => {
  return async (dispatch) => {
    const { data: movies } = await axios.get('/api/movies');
    dispatch(_setMovies(movies));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      return action.movies;
    case DELETE_MOVIE:
      return state.filter((movie) => movie.id !== action.movie.id);
    case CREATE_MOVIE:
      return [...state, action.movie];
    default:
      return state;
  }
};