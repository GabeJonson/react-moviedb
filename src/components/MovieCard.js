import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import axios from 'axios';

const URL = 'https://api.themoviedb.org/3/movie{-}?api_key=5874acfd11651a28c55771624f7021f4&language=en-US';

const IMAGE = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ''
    }
  }

  componentDidMount() {
    axios.get(URL.replace('{-}', this.props.match.url))
      .then(res => {
        let response = JSON.parse(res.request.responseText);

        return response;
      })
      .then(res => this.setState({ item: res }))
  }

  render() {
    if(!this.state.item) return <p>Loading</p>;

    const element = this.state.item
    return (
      <Container>
        <Row>
          <Col>
            <div className='item-contaienr'>
              <img src={IMAGE + element.backdrop_path} alt=""/>
              <h2>{element.original_title}</h2>
              <p>{element.overview}</p>
              <p>{element.release_date}</p>
              {element.production_countries.map((item, key) =>
                <p key={key}>{item.name}</p>
              )}
              <p>
                <a href={element.homepage} target='_blank' rel="noopener noreferrer">{element.homepage}</a>
              </p>
              <div>
                {element.production_companies.map(item => <span key={item.id}>{item.name}</span>)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MovieCard;
