import React, { Component } from 'react';
import { Image } from '../Styled';
import { Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom'

const IMAGE = 'https://image.tmdb.org/t/p/w500_and_h281_bestv2';

class MovieCards extends Component {
  render() {
    return (
      <Row>
        {this.props.items.map((item, key) =>
          <Col xs='1' md='6' lg='4' className='content-container' key={key}>
            <Link to={`/${item.id}`}>
              <Image src={`${IMAGE}${item.backdrop_path}`} alt=""/>
              <h3 className="title">{item.title}</h3>
              <p className="overview">{sliceText(item.overview)}</p>
            </Link>
          </Col>
        )}
      </Row>
    );
  }
}

const sliceText = text => {
  if(text.length > 100) {
    let newString = text.slice(0, 100);
    newString += '...';

    return newString;
  } else return text;
}

export default MovieCards;
