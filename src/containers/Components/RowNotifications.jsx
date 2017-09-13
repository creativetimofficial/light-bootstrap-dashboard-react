import React, { Component } from 'react';
import {Alert, Table} from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';
import NotificationSystem from 'react-notification-system';

import {style} from "variables/Variables.jsx";

const codeExmapleNotificationStyle = `<div className="container-fluid">
    <div className="card">
        <div className="content">
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
    </div>
</div>`;

const codeExmapleNotificationState = `<div className="container-fluid">
    <div className="card">
        <div className="content">
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
</div>`;

const codeExmapleNotificationPlace = `<div className="row">
    <div className="col-md-2">
        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'tl')}>Show notification</button>
    </div>
</div>`;

const codeComponentDidMount = `componentDidMount(){
    this.setState({_notificationSystem: this.refs.notificationSystem})
}`;

const codeHandleClickConstructor = `this.handleClick = this.handleClick.bind(this);
this.componentDidMount = this.componentDidMount.bind(this);
this.state = {
    _notificationSystem: null
};`;

const codeHandleClick = `handleClick(position){
    var level = 'success'; // 'success', 'warning', 'error' or 'info'
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
}`;

class RowNotifications extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            _notificationSystem: null
        };
    }
    handleClick(position){
        position = Math.floor((Math.random() * 6) + 1);
        var level;
        switch (position) {
            case 1:
            level = 'tl';
            break;
            case 2:
            level = 'tc';
            break;
            case 3:
            level = 'tr';
            break;
            case 4:
            level = 'bl';
            break;
            case 5:
            level = 'bc';
            break;
            case 6:
            level = 'br';
            break;
            default:
            break;
        }
        position = level;
        var color = Math.floor((Math.random() * 4) + 1);
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
            <div id="notification-row">
                <NotificationSystem ref="notificationSystem" style={style}/>
                <h2>Notifications</h2>
                <p>
                    We restyled the classic Bootstrap Alert and gave it a more attractive look.
                </p>

                <h4>Notification Style</h4>
                <div className="container-fluid">
                    <div className="card">
                        <div className="content">
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
                    </div>
                </div>
                <br />
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeExmapleNotificationStyle}
                </SyntaxHighlighter>
                <h4>Notification states</h4>
                <div className="container-fluid">
                    <div className="card">
                        <div className="content">
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
                </div>
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeExmapleNotificationState}
                </SyntaxHighlighter>
                <h4>Notification places</h4>
                <p>
                    For this to work you will have to import some components:
                </p>

                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {`import NotificationSystem from 'react-notification-system';`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {`import {style} from "variables/Variables.jsx";`}
                </SyntaxHighlighter>
                <p>
                    <code>style</code> is used for the style of the notification. This is found in <code>src/variables/Variables.jsx</code>.
                </p>
                <p>
                    You will have to add the following function in your class component:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {codeComponentDidMount}
                </SyntaxHighlighter>
                <p>
                    And the following code in your constructor class component:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {codeHandleClickConstructor}
                </SyntaxHighlighter>
                <p>
                    After this, you have to add the following function:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {codeHandleClick}
                </SyntaxHighlighter>
                <p>
                    You have add a <code>NotificationSystem</code> component like this:
                </p>
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {`<NotificationSystem ref="notificationSystem" style={style}/>`}
                </SyntaxHighlighter>
                <p>
                    And finally you have the button that creates the notification:
                </p>
                <div className="row">
                    <div className="col-md-3">
                        <button className="btn btn-default btn-block" onClick={this.handleClick.bind(this,'tl')}>Show notification</button>
                    </div>
                </div>
                <br />
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeExmapleNotificationPlace}
                </SyntaxHighlighter>
                <p>
                    To change where the notification renders, you replace <code>'tl'</code> from <code>this.handleClick.bind(this,'tl')</code> in the <code>onClick</code> propriety:
                </p>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Meaning</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <code>'tl'</code>
                            </td>
                            <td>top-left</td>
                            <td>Notification will appear in the top-left of the screen.</td>
                        </tr>
                        <tr>
                            <td>
                                <code>'tc'</code>
                            </td>
                            <td>top-center</td>
                            <td>Notification will appear in the top-center of the screen.</td>
                        </tr>
                        <tr>
                            <td>
                                <code>'tr'</code>
                            </td>
                            <td>top-right</td>
                            <td>Notification will appear in the top-right of the screen.</td>
                        </tr>
                        <tr>
                            <td>
                                <code>'bl'</code>
                            </td>
                            <td>bottom-left</td>
                            <td>Notification will appear in the bottom-left of the screen.</td>
                        </tr>
                        <tr>
                            <td>
                                <code>'bc'</code>
                            </td>
                            <td>bottom-center</td>
                            <td>Notification will appear in the bottom-center of the screen.</td>
                        </tr>
                        <tr>
                            <td>
                                <code>'br'</code>
                            </td>
                            <td>bottom-right</td>
                            <td>Notification will appear in the bottom-right of the screen.</td>
                        </tr>
                    </tbody>
                </Table>
                <h4>Details</h4>
                <p>
                    For more details on <code>Alert</code> please refer to{' '}
                    <a
                        href="https://react-bootstrap.github.io/components.html#alerts"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            react-bootstrap documentation
                        </a> and for more information about <code>NotificationSystem</code> please refer to{' '}
                        <a
                            href="https://github.com/igorprado/react-notification-system"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                react-notification-system documentation
                            </a>.
                        </p>
                        <div className="alert alert-info">
                            In this page, the <code>Show notification</code> button has a random generated <code>position</code> and <code>level</code>.
                        </div>
                    </div>
        );
    }
}

export default RowNotifications;
