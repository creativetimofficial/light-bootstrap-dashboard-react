import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

import App from 'containers/App/App.jsx';
import Components from 'containers/Components/Components.jsx';

import 'assets/css/bootstrap.min.css';
import 'assets/css/animate.min.css';
import 'assets/sass/light-bootstrap-dashboard.css';
import 'assets/css/demo.css';
import 'assets/css/pe-icon-7-stroke.css';
import 'containers/Components/assets/css/Components.css';

const history = createBrowserHistory();

ReactDOM.render((
    <HashRouter history={history}>
        <Switch>
            <Route path="/components" name="Components" component={Components}/>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));
