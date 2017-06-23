import React, {Component} from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

import axios from 'axios';

const getFilms = {};

const URL = 'https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US';

class MovieSearch extends Component {
  constructor(props) {
    super(props);

    this.state = { searchFilm: '' }
  }

  searchFilm(e) {
    e.preventDefault();

    const form = document.forms[0];

    if(form.elements.query.value === '') {
      form.elements.query.style.border = '1px solid #f33';

      return false
    } else form.elements.query.style.border = '1px solid inherit';

    if(form.elements.query.value !== '')
      getFilms.query = form.elements.query.value;

    if(form.elements.year.value !== '')
      getFilms.year = form.elements.year.value

    if(form.elements.genre.value !== '')
      getFilms.genre = form.elements.genre.value;

    axios({
      method: 'GET',
      url: URL,
      params: getFilms
    })
      .then(res => {
        let response = JSON.parse(res.request.responseText);

        if(response.total_results === 0) {
          form.elements.query.style.border = '1px solid #f33';

          return false
        } else return response
      })
      .then(res => this.setState({ searchFilm: res.results }));
  }

  render() {
    return(
      <Form inline onSubmit={this.searchFilm.bind(this)}>
        <FormGroup>
          <Input
            type="text"
            name="query"
            id="query"
            placeholder="Search by name"
          />
          <Input
            type="text"
            name="year"
            id="year"
            placeholder="Search by year"
          />
          <Button color="info">Search</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default MovieSearch;
