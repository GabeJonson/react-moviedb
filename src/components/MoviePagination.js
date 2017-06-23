import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class MoviePagination extends Component {
  render() {
    return(
      <Pagination>
        {this.props.pages.map((item, key) =>
          <PaginationItem key={key}>
            <PaginationLink onClick={this.props.click} href="#">
              {item}
            </PaginationLink>
          </PaginationItem>
        )}
      </Pagination>
    );
  }
}

export default MoviePagination;
