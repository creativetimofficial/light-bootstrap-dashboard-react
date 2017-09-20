import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import NotificationSystem from 'react-notification-system';

import {style} from "variables/Variables.jsx";

class Notifications extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
			_notificationSystem: null
		};
    }
    handleClick(position){
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
        this.setState({_notificationSystem: this.refs.notificationSystem})
    }

    render() {

        return (
            <div className="content">
                <div className="row">
                    <div className="col-xs-11 col-sm-4 fadeInDown">
                        <NotificationSystem ref="notificationSystem" style={style}/>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="card">
                        <div className="header">
                            <h4 className="title">Notifications</h4>
                            <p className="category">Handcrafted by <a target="_blank" rel="noopener noreferrer" href="https://github.com/igorprado">Igor Prado.</a>. Please checkout the <a href="http://igorprado.com/react-notification-system/" rel="noopener noreferrer" target="_blank">full documentation.</a></p>

                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Notifications Style</h5>
                                    <Alert bsStyle="info">
                                        <span>This is a plain notification</span>
                                    </Alert>
                                    <Alert bsStyle="info">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span>This is a notification with close button.</span>
                                    </Alert>
                                    <Alert bsStyle="info" className="alert-with-icon">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span data-notify="icon" className="pe-7s-bell"></span>
                                        <span data-notify="message">This is a notification with close button and icon.</span>
                                    </Alert>
                                    <Alert bsStyle="info" className="alert-with-icon">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span data-notify="icon" className="pe-7s-bell"></span>
                                        <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                                    </Alert>
                                </div>
                                <div className="col-md-6">
                                    <h5>Notification states</h5>
                                    <Alert bsStyle="info">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span><b> Info - </b> This is a regular notification made with bsStyle="info"</span>
                                    </Alert>
                                    <Alert bsStyle="success">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span><b> Success - </b> This is a regular notification made with bsStyle="success"</span>
                                    </Alert>
                                    <Alert bsStyle="warning">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span><b> Warning - </b> This is a regular notification made with bsStyle="warning"</span>
                                    </Alert>
                                    <Alert bsStyle="danger">
                                        <button type="button" aria-hidden="true" className="close">&#x2715;</button>
                                        <span><b> Danger - </b> This is a regular notification made with bsStyle="danger"</span>
                                    </Alert>
                                </div>
                            </div>
                            <br/>
                            <br/>
                            <div className="places-buttons">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 text-center">
                                        <h5>Notifications Places
                                            <p className="category">Click to view notifications</p>
                                        </h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 col-md-offset-3">
                                        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'tl')}>Top Left</button>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'tc')}>Top Center</button>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'tr')}>Top Right</button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2 col-md-offset-3">
                                        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'bl')}>Bottom Left</button>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'bc')}>Bottom Center</button>
                                    </div>
                                    <div className="col-md-2">
                                        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'br')}>Bottom Right</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notifications;
