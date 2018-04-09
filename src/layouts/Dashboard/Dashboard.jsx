import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Sidebar from 'components/Sidebar/Sidebar';

import FixedPlugin from 'components/FixedPlugin/FixedPlugin.jsx';

import {style} from "variables/Variables.jsx";

import imagine from "assets/img/sidebar-3.jpg";
import dashboardRoutes from 'routes/dashboard.jsx';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: imagine,
            color: "black",
            hasImage: true,
            _notificationSystem: null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleColorClick = this.handleColorClick.bind(this);
        this.handleHasImage = this.handleHasImage.bind(this);
        this.handleNotificationClick = this.handleNotificationClick.bind(this);
    }
    handleImageClick(image){
        this.setState({image: image});
    }
    handleColorClick(color){
        this.setState({color: color});
    }
    handleHasImage(hasImage){
        this.setState({hasImage: hasImage});
    }
    handleNotificationClick(position){
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
        switch (color) {
            case 1:
                level = 'success';
                break;
            case 2:
                level = 'warning';
                break;
            case 3:
                level = 'error';
                break;
            case 4:
                level = 'info';
                break;
            default:
                break;
        }
        this.state._notificationSystem.addNotification({
            title: (<span data-notify="icon" className="pe-7s-gift"></span>),
            message: (
                <div>
                    Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.
                </div>
            ),
            level: level,
            position: position,
            autoDismiss: 15,
        });
    }
    componentDidMount(){
        this.setState({_notificationSystem: this.refs.notificationSystem});
        var _notificationSystem = this.refs.notificationSystem;
        var color = Math.floor((Math.random() * 4) + 1);
        var level;
        switch (color) {
            case 1:
                level = 'success';
                break;
            case 2:
                level = 'warning';
                break;
            case 3:
                level = 'error';
                break;
            case 4:
                level = 'info';
                break;
            default:
                break;
        }
        _notificationSystem.addNotification({
            title: (<span data-notify="icon" className="pe-7s-gift"></span>),
            message: (
                <div>
                    Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.
                </div>
            ),
            level: level,
            position: "tr",
            autoDismiss: 15,
        });
    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render() {
        return (

                <div className="wrapper">
                    <NotificationSystem ref="notificationSystem" style={style}/>
                    <Sidebar
                        bgImage={this.state["image"]}
                        dataColor={this.state["color"]}
                        hasImage={this.state["hasImage"]}
                        {...this.props}
                    />
                    <div id="main-panel" className="main-panel">
                        <Header {...this.props}/>
                            <Switch>
                                {
                                    dashboardRoutes.map((prop,key) => {
                                        if(prop.name === "Notifications")
                                            return (
                                                <Route
                                                    path={prop.path}
                                                    key={key}
                                                    render={routeProps =>
                                                       <prop.component
                                                           {...routeProps}
                                                           handleClick={this.handleNotificationClick}
                                                       />}
                                                />
                                            );
                                        if(prop.redirect)
                                            return (
                                                <Redirect from={prop.path} to={prop.to} key={key}/>
                                            );
                                        return (
                                            <Route path={prop.path} component={prop.component} key={key}/>
                                        );
                                    })
                                }
                            </Switch>
                        <Footer />
                        <FixedPlugin
                            handleImageClick={this.handleImageClick}
                            handleColorClick={this.handleColorClick}
                            handleHasImage={this.handleHasImage}
                            bgColor={this.state["color"]}
                            bgImage={this.state["image"]}/>
                    </div>
                </div>
        );
    }
}

export default Dashboard;
