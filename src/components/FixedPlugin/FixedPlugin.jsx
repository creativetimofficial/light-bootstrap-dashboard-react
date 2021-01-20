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
/*eslint-disable*/
import React, { Component } from "react";

import { Dropdown, Badge, Button } from "react-bootstrap";

import imagine1 from "assets/img/sidebar-1.jpg";
import imagine2 from "assets/img/sidebar-2.jpg";
import imagine3 from "assets/img/sidebar-3.jpg";
import imagine4 from "assets/img/sidebar-4.jpg";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show-dropdown open",
      bg_checked: true,
      bgImage: this.props.bgImage,
    };
  }
  handleClick = () => {
    this.props.handleFixedClick();
  };
  onChangeClick = () => {
    this.props.handleHasImage(!this.state.bg_checked);
    this.setState({ bg_checked: !this.state.bg_checked });
  };
  render() {
    return (
      <div className="fixed-plugin">
        <Dropdown className="show-dropdown">
          <a
            data-toggle="dropdown"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fas fa-cogs fa-2x"></i>
          </a>
          <Dropdown.Menu>
            <li className="header-title">Sidebar Style</li>
            <li className="adjustments-line">
              <a className="switch-trigger" href="javascript:void(0)">
                <p>Background Image</p>
                <label className="switch">
                  <input
                    data-off-color="primary"
                    data-on-color="primary"
                    data-toggle="switch"
                    defaultChecked
                    type="checkbox"
                  ></input>
                  <span className="toggle"></span>
                </label>
                <div className="clearfix"></div>
              </a>
            </li>
            <li className="adjustments-line">
              <a
                className="switch-trigger background-color"
                href="javascript:void(0)"
              >
                <p>Filters</p>
                <div className="pull-right">
                  <Badge
                    className="filter badge-black"
                    data-color="black"
                  ></Badge>
                  <Badge
                    className="filter badge-azure"
                    data-color="azure"
                  ></Badge>
                  <Badge
                    className="filter badge-green"
                    data-color="green"
                  ></Badge>
                  <Badge
                    className="filter badge-orange"
                    data-color="orange"
                  ></Badge>
                  <Badge className="filter badge-red" data-color="red"></Badge>
                  <Badge
                    className="filter badge-purple active"
                    data-color="purple"
                  ></Badge>
                </div>
                <div className="clearfix"></div>
              </a>
            </li>
            <li className="header-title">Sidebar Images</li>
            <li className="active">
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img alt="..." src={require("assets/img/sidebar-1.jpg")}></img>
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img alt="..." src={require("assets/img/sidebar-3.jpg")}></img>
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img alt="..." src={require("assets/img/sidebar-4.jpg")}></img>
              </a>
            </li>
            <li>
              <a
                className="img-holder switch-trigger"
                href="javascript:void(0)"
              >
                <img alt="..." src={require("assets/img/sidebar-5.jpg")}></img>
              </a>
            </li>
            <li className="button-container">
              <div>
                <Button
                  block
                  className="btn-fill"
                  href="http://www.creative-tim.com/product/light-bootstrap-dashboard-react"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="info"
                >
                  Download, it's free!
                </Button>
              </div>
            </li>
            <li className="header-title pro-title text-center">
              Want more components?
            </li>
            <li className="button-container">
              <div>
                <Button
                  block
                  className="btn-fill"
                  href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react"
                  rel="noopener noreferrer"
                  target="_blank"
                  variant="warning"
                >
                  Get The PRO Version!
                </Button>
              </div>
            </li>
            <li className="header-title" id="sharrreTitle">
              Thank you for sharing!
            </li>
            <li className="button-container">
              <Button
                className="btn-social btn-outline btn-round sharrre"
                id="twitter"
                variant="twitter"
              >
                <i className="fab fa-twitter"></i>· 256
              </Button>
              <Button
                className="btn-social btn-outline btn-round sharrre"
                id="facebook"
                variant="facebook"
              >
                <i className="fab fa-facebook-square"></i>· 426
              </Button>
            </li>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default FixedPlugin;
