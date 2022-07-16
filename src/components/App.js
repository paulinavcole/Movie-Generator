import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Movies from './Movies';
import { connect } from 'react-redux';
import { fetchMovies, createMovie,  } from '../store/movies';

class App extends Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <Router>
        <div id='main'>
          <h1>
            <Link to='/'>Movies ({this.props.movies.length})</Link>
          </h1>
          <button onClick={ this.props.createMovie }>Create A New Movie</button>
          <Switch>
            <Route exact path='/' component={Movies} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = (dispatch) => {
  return {
    createMovie: ()=> {
      dispatch(createMovie())
    },
    load: () => {
      dispatch(fetchMovies())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);