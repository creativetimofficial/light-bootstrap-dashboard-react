import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';


import App from 'containers/App/App.jsx';
import Components from 'containers/Components/Components.jsx';

import 'assets/css/bootstrap.min.css';
import 'assets/css/animate.min.css';
import 'assets/sass/light-bootstrap-dashboard.css';
import 'assets/css/demo.css';
import 'assets/css/pe-icon-7-stroke.css';
import 'containers/Components/assets/css/Components.css';

const history = createBrowserHistory();
ReactGA.initialize('UA-000000-01');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render((
    <HashRouter history={history} onUpdate={logPageView}>
        <Switch>
            <Route path="/components" name="Components" component={Components}/>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));
