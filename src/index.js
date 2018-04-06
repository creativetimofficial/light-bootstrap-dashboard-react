import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';

import indexRoutes from "routes/index.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import 'assets/css/animate.min.css';
import "./assets/sass/light-bootstrap-dashboard.css?v=1.2.0";
import 'assets/css/demo.css';
import 'assets/css/pe-icon-7-stroke.css';
import 'containers/Components/assets/css/Components.css';

const history = createBrowserHistory();

ReactGA.initialize('UA-46172202-11');
ReactGA.set({ page: window.location.pathname + window.location.search });
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen( location =>  {
    ReactGA.set({ page: window.location.pathname + window.location.search });
    ReactGA.pageview(window.location.pathname + window.location.search);
});

ReactDOM.render((
    <HashRouter>
        <Switch>
          {indexRoutes.map((prop, key) => {
            return <Route to={prop.path} component={prop.component} key={key} />;
          })}
        </Switch>
    </HashRouter>
),document.getElementById('root'));
