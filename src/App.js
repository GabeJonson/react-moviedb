import React, { Component } from 'react';
import { Container } from 'reactstrap';

import MovieCards from "./components/MovieCards";
import MoviePagination from "./components/MoviePagination";

import axios from 'axios';

const URL = `https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22`;

const pages = [1,2,3,4,5,6,7,8,9];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      movies: '',
    }
  }

  componentDidMount() {
    this.getMovies(this.state.page);
  }

  getMovies(page) {
    axios.get(`${URL}&page=${page}`)
      .then(res => {
        let result = JSON.parse(res.request.responseText);

        return result
      })
      .then(res => this.setState({movies: res}));
  }

  paginationLink(e) {
    e.preventDefault();

    this.getMovies(e.target.innerHTML);
  }

  render() {
    if(!this.state.movies) return <p>Loading</p>;

    return (
      <Container>
        <h1>Movie DB</h1>
        <MovieCards items={this.state.movies.results} />
        <MoviePagination
          click={this.paginationLink.bind(this)}
          pages={pages}
        />
      </Container>
    );
  }
}

export default App;
