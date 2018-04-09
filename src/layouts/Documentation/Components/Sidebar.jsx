import React, { Component } from "react";
import { Affix } from "react-overlays";
import { Link } from "react-router-dom";

import documentationRoutes from "routes/documentation.jsx";

class Sidebar extends Component {
  render() {
    return (
      <Affixed>
        <ul className="nav nav-pills nav-stacked fixed-section">
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
