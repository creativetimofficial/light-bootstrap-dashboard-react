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
import { Affix } from "react-overlays";
import { Link } from "react-router-dom";

import documentationRoutes from "documentation.js";

class Sidebar extends Component {
  render() {
    return (
      <Affixed>
        <ul className="nav nav-pills nav-stacked fixed-section d-flex flex-column">
          {documentationRoutes.map((prop, key) => {
            if (prop.redirect) {
              return null;
            }
            return (
              <li key={key}>
                <Link to={prop.path} className="nav-link">
                  {prop.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </Affixed>
    );
  }
}

class Affixed extends Component {
  render() {
    return window.innerWidth > 991 ? (
      <Affix offsetTop={400}>{this.props.children}</Affix>
    ) : (
      this.props.children
    );
  }
}

export default Sidebar;
