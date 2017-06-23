import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieCard from './components/MovieCard';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li className='home-link'><Link to="/">Home</Link></li>
      </ul>

      <Route exact path="/" component={App}/>
      <Route path="/:id" component={MovieCard}/>
    </div>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
