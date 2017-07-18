import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from 'containers/Dashboard/Dashboard';
import UserProfile from 'containers/UserProfile/UserProfile';
import TableList from 'containers/TableList/TableList';
import Typography from 'containers/Typography/Typography';
import Icons from 'containers/Icons/Icons';
import Maps from 'containers/Maps/Maps';
import Notifications from 'containers/Notifications/Notifications';
import UpgradeToPro from 'containers/UpgradeToPro/UpgradeToPro'

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';


class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <div id="sidebar">
                        <Sidebar />
                    </div>
                        <div id="main-panel" className="main-panel">
                            <Header header={window.location.pathname}/>

                            <Switch>

                                <Route path="/dashboard.html" component={Dashboard}/>
                                <Route path="/user.html" component={UserProfile}/>
                                <Route path="/table.html" component={TableList}/>
                                <Route path="/typography.html" component={Typography}/>
                                <Route path="/icons.html" component={Icons}/>
                                <Route path="/maps.html" component={Maps}/>
                                <Route path="/notifications.html" component={Notifications}/>
                                <Route path="/upgrade.html" component={UpgradeToPro}/>
                            </Switch>

                            <Footer />
                        </div>
                </div>
            </Router>
        );
    }
}

export default App;
