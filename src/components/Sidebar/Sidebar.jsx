import React, {Component} from 'react';
import {} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import imagine from 'img/sidebar-5.jpg';
import logo from 'img/reactlogo.png';

class Sidebar extends Component{
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    render(){
        const sidebarBackground = {
            backgroundImage: 'url(' + imagine + ')'
        };
        return (
            <div id="sidebar" className="sidebar" data-color="blue" data-image={imagine}>
                <div className="sidebar-background" style={sidebarBackground}></div>
                <div className="sidebar-wrapper">
                    <div className="logo">
                        <a href="http://www.creative-tim.com" className="simple-text">
                            <img src={logo} alt="logo_image" width="40" height="28.25"/>Creative Tim
                        </a>
                    </div>

                    <ul className="nav">
                        <li className={this.activeRoute("/dashboard")}>
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-graph"></i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/user")}>
                            <NavLink to={'/user'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-user"></i>
                                <p>User Profile</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/table")}>
                            <NavLink to={'/table'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-note2"></i>
                                <p>Table List</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/typography")}>
                            <NavLink to={'/typography'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-news-paper"></i>
                                <p>Typography</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/icons")}>
                            <NavLink to={'/icons'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-science"></i>
                                <p>Icons</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/maps")}>
                            <NavLink to={'/maps'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-map-marker"></i>
                                <p>Maps</p>
                            </NavLink>
                        </li>
                        <li className={this.activeRoute("/notifications")}>
                            <NavLink to={'/notifications'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-bell"></i>
                                <p>Notifications</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/components'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-copy-file"></i>
                                <p>Documentation</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
