import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import NotificationSystem from 'react-notification-system';


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
        this.state._notificationSystem = this.refs.notificationSystem;
    }

    render() {
        var defaultWidth = window.screen.width > 768 ? window.screen.width*1/3: window.screen.width;

        var style = {
            Wrapper: {},
            Containers: {
                DefaultStyle: {
                    position: 'fixed',
                    width: defaultWidth,
                    padding: '10px 10px 10px 20px',
                    zIndex: 9998,
                    WebkitBoxSizing: '',
                    MozBoxSizing: '',
                    boxSizing: '',
                    height: 'auto',
                    display: 'inline-block',
                    border: '0',
                    fontSize: '14px',
                    WebkitFontSmoothing: "antialiased",
                    fontFamily: '"Roboto","Helvetica Neue",Arial,sans-serif',
                    fontWeight: '400',
                    color: '#FFFFFF'

                },

                tl: {
                    top: '0px',
                    bottom: 'auto',
                    left: '0px',
                    right: 'auto'
                },

                tr: {
                    top: '0px',
                    bottom: 'auto',
                    left: 'auto',
                    right: '0px'
                },

                tc: {
                    top: '0px',
                    bottom: 'auto',
                    margin: '0 auto',
                    left: '50%',
                    marginLeft: -(defaultWidth / 2)
                },

                bl: {
                    top: 'auto',
                    bottom: '0px',
                    left: '0px',
                    right: 'auto'
                },

                br: {
                    top: 'auto',
                    bottom: '0px',
                    left: 'auto',
                    right: '0px'
                },

                bc: {
                    top: 'auto',
                    bottom: '0px',
                    margin: '0 auto',
                    left: '50%',
                    marginLeft: -(defaultWidth / 2)
                }

            },

            NotificationItem: {
                DefaultStyle: {
                    position: 'relative',
                    width: '100%',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    fontSize: '14px',
                    margin: '10px 0 0',
                    padding: '10px',
                    display: 'block',
                    WebkitBoxSizing: 'border-box',
                    MozBoxSizing: 'border-box',
                    boxSizing: 'border-box',
                    opacity: 0,
                    transition: 'all 0.5s ease-in-out',
                    WebkitTransform: 'translate3d(0, 0, 0)',
                    transform: 'translate3d(0, 0, 0)',
                    willChange: 'transform, opacity',

                    isHidden: {
                        opacity: 0
                    },

                    isVisible: {
                        opacity: 1
                    }
                },

                success: {
                    borderTop: 0,
                    backgroundColor: '#a1e82c',
                    WebkitBoxShadow: 0,
                    MozBoxShadow: 0,
                    boxShadow: 0
                },

                error: {
                    borderTop: 0,
                    backgroundColor: '#fc727a',
                    WebkitBoxShadow: 0,
                    MozBoxShadow: 0,
                    boxShadow: 0
                },

                warning: {
                    borderTop: 0,
                    backgroundColor: '#ffbc67',
                    WebkitBoxShadow: 0,
                    MozBoxShadow: 0,
                    boxShadow: 0
                },

                info: {
                    borderTop: 0,
                    backgroundColor: '#63d8f1',
                    WebkitBoxShadow: 0,
                    MozBoxShadow: 0,
                    boxShadow: 0
                }
            },

            Title: {
                DefaultStyle: {
                    fontSize: '30px',
                    margin: '0',
                    padding: 0,
                    fontWeight: 'bold',
                    color: '#FFFFFF',
                    display: 'block',
                    left: '15px',
                    position: 'absolute',
                    top: '50%',
                    marginTop: '-15px'
                }

            },

            MessageWrapper: {
                DefaultStyle: {
                    marginLeft: '55px',
                    marginRight: '30px',
                    padding: '0 12px 0 0',
                    color: '#FFFFFF',
                    maxWidthwidth: '89%'
                }
            },

            Dismiss: {
                DefaultStyle: {
                    fontFamily: 'inherit',
                    fontSize: '21px',
                    color: '#000',
                    float: 'right',
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    marginTop: '-13px',
                    backgroundColor: '#FFFFFF',
                    display: 'block',
                    borderRadius: '50%',
                    opacity: '.4',
                    lineHeight: '11px',
                    width: '25px',
                    height: '25px',
                    outline: '0 !important',
                    textAlign: 'center',
                    padding: '6px 3px 3px 3px',
                    fontWeight: '300',
                    marginLeft: '65px'
                },

                success: {
                    // color: '#f0f5ea',
                    // backgroundColor: '#a1e82c'
                },

                error: {
                    // color: '#f4e9e9',
                    // backgroundColor: '#fc727a'
                },

                warning: {
                    // color: '#f9f6f0',
                    // backgroundColor: '#ffbc67'
                },

                info: {
                    // color: '#e8f0f4',
                    // backgroundColor: '#63d8f1'
                }
            },

            Action: {
                DefaultStyle: {
                    background: '#ffffff',
                    borderRadius: '2px',
                    padding: '6px 20px',
                    fontWeight: 'bold',
                    margin: '10px 0 0 0',
                    border: 0
                },

                success: {
                    backgroundColor: '#a1e82c',
                    color: '#ffffff'
                },

                error: {
                    backgroundColor: '#fc727a',
                    color: '#ffffff'
                },

                warning: {
                    backgroundColor: '#ffbc67',
                    color: '#ffffff'
                },

                info: {
                    backgroundColor: '#63d8f1',
                    color: '#ffffff'
                }
            },

            ActionWrapper: {
                DefaultStyle: {
                    margin: 0,
                    padding: 0
                }
            }
        }
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
                            <p className="category">Handcrafted by our friend <a target="_blank" rel="noopener noreferrer" href="https://github.com/mouse0270">Robert McIntosh</a>. Please checkout the <a href="http://bootstrap-notify.remabledesigns.com/" rel="noopener noreferrer" target="_blank">full documentation.</a></p>

                        </div>
                        <div className="content">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5>Notifications Style</h5>
                                    <Alert bsStyle="info">
                                        <span>This is a plain notification</span>
                                    </Alert>
                                    <Alert bsStyle="info">
                                        <button type="button" aria-hidden="true" className="close">×</button>
                                        <span>This is a notification with close button.</span>
                                    </Alert>
                                    <Alert bsStyle="info" className="alert-with-icon">
                                        <button type="button" aria-hidden="true" className="close">×</button>
                                        <span data-notify="icon" className="pe-7s-bell"></span>
                                        <span data-notify="message">This is a notification with close button and icon.</span>
                                    </Alert>
                                    <Alert bsStyle="info" className="alert-with-icon">
                                        <button type="button" aria-hidden="true" className="close">×</button>
                                        <span data-notify="icon" className="pe-7s-bell"></span>
                                        <span data-notify="message">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>
                                    </Alert>
                                </div>
                                <div className="col-md-6">
                                    <h5>Notification states</h5>
                                    <Alert bsStyle="info">
                                        <button type="button" aria-hidden="true" className="close">×</button>
                                        <span><b> Info - </b> This is a regular notification made with ".alert-info"</span>
                                    </Alert>
                                    <Alert bsStyle="success">
                                        <button type="button" aria-hidden="true" className="close">×</button>
                                        <span><b> Success - </b> This is a regular notification made with ".alert-success"</span>
                                    </Alert>
                                    <Alert bsStyle="warning">
                                        <button type="button" aria-hidden="true" className="close">×</button>
                                        <span><b> Warning - </b> This is a regular notification made with ".alert-warning"</span>
                                    </Alert>
                                    <Alert bsStyle="danger">
                                        <button type="button" aria-hidden="true" className="close">×</button>
                                        <span><b> Danger - </b> This is a regular notification made with ".alert-danger"</span>
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
