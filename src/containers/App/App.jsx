import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Typography from 'views/Typography/Typography';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';

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
                                    <Redirect from="/" to="/dashboard"/>
                                </Switch>

                            <Footer />
                        </div>
                </div>


        );
    }
}

export default App;
