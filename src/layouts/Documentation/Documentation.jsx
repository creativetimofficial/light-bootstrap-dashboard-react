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
import ReactDOM from "react-dom";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

import Sidebar from "./Components/Sidebar.jsx";

import documentationRoutes from "documentation.js";

import ctLogo from "./assets/img/new_logo.png";
import imagine from "./assets/img/full-image-1.jpg";
import reactLogo from "./assets/img/reactlogo.png";
const headerBackground = {
  backgroundImage: "url(" + imagine + ")"
};

class Documentation extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
    const windowsScrollTop = window.pageYOffset;
    var navbar = ReactDOM.findDOMNode(this.refs.navbarColorOnScroll);
    var title = ReactDOM.findDOMNode(this.refs.navbarTitle);
    if (windowsScrollTop > 381) {
      navbar.classList.remove("navbar-transparent");
      title.classList.remove("hidden");
    } else {
      navbar.classList.add("navbar-transparent");
      title.classList.add("hidden");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.documentationPanel.scrollTop = 0;
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <div className="components">
        <div className="header-wrapper">
          <nav
            className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll"
            ref="navbarColorOnScroll"
          >
            <div className="container">
              <div className="navbar-header">
                <button
                  id="menu-toggle"
                  type="button"
                  className="navbar-toggle"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar bar1" />
                  <span className="icon-bar bar2" />
                  <span className="icon-bar bar3" />
                </button>
                <a
                  href="https://www.creative-tim.com?ref=lbdr-header-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="logo-container">
                    <div className="logo">
                      <img src={ctLogo} alt="Creative Tim Logo" />
                    </div>
                    <div className="brand">Creative Tim</div>
                  </div>
                </a>
              </div>

              <div className="collapse navbar-collapse text-center">
                <ul className="nav navbar-nav navbar-center">
                  <li>
                    <div
                      className="navbar-title hidden text-center"
                      ref="navbarTitle"
                    >
                      <h4>
                        <div className="image-container">
                          <img src={reactLogo} alt="React Logo" />
                        </div>
                        LBD React Free
                      </h4>
                    </div>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=lbdr-docs-navbar-upgrade-pro" className="btn btn-simple btn-default" target="_blank">
                      <i className="fa fa-rocket" /> Upgrade to PRO
                    </a>
                  </li>
                  <li>
                    <Link to="/" className="btn btn-simple btn-default">
                      <i className="fa fa-list" /> Back to dashboard
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-simple btn-default"
                    >
                      <i className="fa fa-bug" /> Report bug
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/creativetimofficial/light-bootstrap-dashboard-react"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-default btn-simple"
                    >
                      <i className="fa fa-github" /> Contribute
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="header" style={headerBackground}>
            <div className="filter" />
            <div className="title-container text-center">
              <img src={reactLogo} alt="React Logo" />
              <h1>Light Bootstrap Dashboard React</h1>
              <h3>Elements description</h3>
            </div>
          </div>
        </div>
        <div className="main" ref="documentationPanel">
          <div className="section">
            <div className="container">
              <div className="row">
                <Grid fluid style={{ marginBottom: "50px" }}>
                  <Row>
                    <Col md={2}>
                      <Sidebar />
                    </Col>
                    <Col md={8} offset={1}>
                      <Switch>
                        {documentationRoutes.map((prop, key) => {
                          if (prop.redirect)
                            return (
                              <Redirect
                                from={prop.path}
                                to={prop.to}
                                key={key}
                              />
                            );
                          return (
                            <Route
                              path={prop.path}
                              component={prop.component}
                              key={key}
                            />
                          );
                        })}
                      </Switch>
                    </Col>
                  </Row>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Documentation;
