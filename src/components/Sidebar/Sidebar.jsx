/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "assets/img/reactlogo.png";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")",
    };
    return (
      <div className="sidebar" data-image="../assets/img/sidebar-5.jpg">
        {/* Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red" Tip 2: you can also add an image using data-image tag */}
        <div className="sidebar-wrapper">
          <div className="logo">
            <a className="simple-text" href="http://www.creative-tim.com">
              Creative Tim
            </a>
          </div>
          <Nav>
            <Nav.Item className="active">
              <Nav.Link href="dashboard.html">
                <i className="nc-icon nc-chart-pie-35"></i>
                <p>Dashboard</p>
              </Nav.Link>
            </Nav.Item>
            <li>
              <Nav.Link href="./user.html">
                <i className="nc-icon nc-circle-09"></i>
                <p>User Profile</p>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="./table.html">
                <i className="nc-icon nc-notes"></i>
                <p>Table List</p>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="./typography.html">
                <i className="nc-icon nc-paper-2"></i>
                <p>Typography</p>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="./icons.html">
                <i className="nc-icon nc-atom"></i>
                <p>Icons</p>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="./maps.html">
                <i className="nc-icon nc-pin-3"></i>
                <p>Maps</p>
              </Nav.Link>
            </li>
            <li>
              <Nav.Link href="./notifications.html">
                <i className="nc-icon nc-bell-55"></i>
                <p>Notifications</p>
              </Nav.Link>
            </li>
            <Nav.Item className="active active-pro">
              <Nav.Link className="active" href="upgrade.html">
                <i className="nc-icon nc-alien-33"></i>
                <p>Upgrade to PRO</p>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
