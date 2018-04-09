import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import ReactGA from 'react-ga';

import 'assets/css/bootstrap.min.css';
import 'assets/css/animate.min.css';
import 'assets/sass/light-bootstrap-dashboard.css';
import 'assets/css/demo.css';
import 'assets/css/pe-icon-7-stroke.css';
import 'layouts/Documentation/assets/css/documentation.css';

import indexRoutes from "routes/index.jsx";

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
            {
              indexRoutes.map((prop,key) => {
                return (<Route path={prop.path} name={prop.name} component={prop.component} key={key}/>);
              })
            }
        </Switch>
    </HashRouter>
),document.getElementById('root'));
