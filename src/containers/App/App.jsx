import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
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

                <div className="wrapper">
                        <Sidebar {...this.props}/>
                        <div id="main-panel" className="main-panel">
                            <Header {...this.props}/>

                                <Switch>
                                    <Route path="/dashboard" component={Dashboard}/>
                                    <Route path="/user" component={UserProfile}/>
                                    <Route path="/table" component={TableList}/>
                                    <Route path="/typography" component={Typography}/>
                                    <Route path="/icons" component={Icons}/>
                                    <Route path="/maps" component={Maps}/>
                                    <Route path="/notifications" component={Notifications}/>
                                    <Route path="/upgrade" component={UpgradeToPro}/>
                                    <Redirect from="/" to="/dashboard"/>
                                </Switch>

                            <Footer />
                        </div>
                </div>


        );
    }
}

export default App;
