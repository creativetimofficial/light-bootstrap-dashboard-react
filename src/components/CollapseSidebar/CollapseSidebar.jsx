import React, {Component} from 'react';
import { NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import imagine from 'img/sidebar-5.jpg';
import logo from 'img/reactlogo.png';

class CollapseSidebar extends Component{
    activeRoute(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    render(){
        // console.log(this.imageExists('img/sidebar-5.jpg'));
        const sidebarBackground = {
            backgroundImage: 'url(' + imagine + ')'
        };
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
            </div>
        );
        return (
            <div className="collapse navbar-collapse has-image" data-color="blue" style={sidebarBackground} id="collapseSidebar">
                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text">
                        <img src={logo} alt="logo_image" width="40" height="28.25"/> Creative Tim
                    </a>
                </div>
                <ul className="nav navbar-nav">
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
                    <NavItem eventKey={1} href="#">
                        <i className="fa fa-dashboard"></i>
                    </NavItem>
                    <NavDropdown eventKey={2} title={notification} id="basic-nav-dropdown">
                        <MenuItem eventKey={2.1}>Notification 1</MenuItem>
                        <MenuItem eventKey={2.2}>Notification 2</MenuItem>
                        <MenuItem eventKey={2.3}>Notification 3</MenuItem>
                        <MenuItem eventKey={2.4}>Notification 4</MenuItem>
                        <MenuItem eventKey={2.5}>Another notifications</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">
                        <i className="fa fa-search"></i>
                    </NavItem>
                    <NavItem eventKey={1} href="#">Account</NavItem>
                    <NavDropdown eventKey={2} title="Dropdown" id="basic-nav-dropdown-right">
                        <MenuItem eventKey={2.1}>Action</MenuItem>
                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                        <MenuItem eventKey={2.3}>Something</MenuItem>
                        <MenuItem eventKey={2.4}>Another action</MenuItem>
                        <MenuItem eventKey={2.5}>Something</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={2.5}>Separated link</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={3} href="#">Log out</NavItem>
                </ul>
            </div>
        );
    }
}

export default CollapseSidebar;
