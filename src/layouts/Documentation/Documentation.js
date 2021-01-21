/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import { Container, Row, Col, Navbar, Nav, NavItem } from "react-bootstrap";

import Sidebar from "./Components/Sidebar.js";

import documentationRoutes from "documentation.js";

import ctLogo from "./assets/img/new_logo.png";
import imagine from "./assets/img/full-image-1.jpg";
import reactLogo from "./assets/img/reactlogo.png";
const headerBackground = {
  backgroundImage: "url(" + imagine + ")",
};

function Documentation() {
  return (
    <div className="components">
      <div className="header-wrapper">
        <Navbar
          className="navbar-transparent navbar-components position-absolute bg-transparent w-100 p-4"
          style={{ zIndex: 9999 }}
        >
          <Container className="d-flex justify-content-between">
            <Navbar.Brand as="div" className="p-0">
              <div className="navbar-title text-center p-0">
                <h4 className="m-0 d-flex justify-content-center align-items-center">
                  <div
                    className="image-container h-auto"
                    style={{ width: "45px" }}
                  >
                    <img
                      alt="React Logo"
                      src={reactLogo}
                      className="w-100 h-auto"
                    />
                  </div>
                  LBD PRO React
                </h4>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a
                    className="nav-link text-white btn btn-primary btn-fill m-0"
                    href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=lbr-docs-navbar"
                    target="_blank"
                  >
                    Upgrade to PRO
                  </a>
                </li>
                <li>
                  <a
                    className="nav-link text-white"
                    href="https://github.com/creativetimofficial/light-bootstrap-dashboard-react/issues"
                    target="_blank"
                  >
                    Have an issue?
                  </a>
                </li>
                <li>
                  <NavLink
                    to="/"
                    className="nav-link text-white"
                    activeClassName="active"
                  >
                    Go back to dashboard
                  </NavLink>
                </li>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="header" style={headerBackground}>
          <div className="filter" />
          <div className="title-container text-center">
            <img
              src={reactLogo}
              alt="React Logo"
              style={{ width: "100px", height: "auto" }}
            />
            <h1>Light Bootstrap Dashboard React</h1>
            <h3>Elements description</h3>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="section">
          <div className="container">
            <div className="row">
              <Container fluid style={{ marginBottom: "50px" }}>
                <Row>
                  <Col md={2}>
                    <Sidebar />
                  </Col>
                  <Col md={8} offset={1}>
                    <Switch>
                      {documentationRoutes.map((prop, key) => {
                        if (prop.redirect)
                          return (
                            <Redirect from={prop.path} to={prop.to} key={key} />
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
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
