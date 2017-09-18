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



const history = createBrowserHistory();

ReactDOM.render((
    <HashRouter history={history}>
        <Switch>
            <Route path="/components" name="Components" component={Components}/>
            <Route path="/" name="Home" component={App}/>
        </Switch>
    </HashRouter>
),document.getElementById('root'));
