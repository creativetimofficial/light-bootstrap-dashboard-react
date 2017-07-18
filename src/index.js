import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import App from 'containers/App/App.jsx';

import './css/bootstrap.min.css';
import './css/animate.min.css';
import './css/light-bootstrap-dashboard.css';
import './css/demo.css';
import './css/pe-icon-7-stroke.css';
import './css/m-style.css';

// import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render((
  <HashRouter history={history}>
    <Switch>
      <Route path="/" name="Home" component={App}/>
    </Switch>
  </HashRouter>
),document.getElementById('root'));
// registerServiceWorker();
