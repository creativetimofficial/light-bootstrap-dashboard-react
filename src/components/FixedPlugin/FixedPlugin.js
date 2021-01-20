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

import { Dropdown, Badge, Button, Form } from "react-bootstrap";

import sideBarImage1 from "assets/img/sidebar-1.jpg";
import sideBarImage2 from "assets/img/sidebar-2.jpg";
import sideBarImage3 from "assets/img/sidebar-3.jpg";
import sideBarImage4 from "assets/img/sidebar-4.jpg";

function FixedPlugin({
  hasImage,
  setHasImage,
  color,
  setColor,
  image,
  setImage,
}) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     classes: "dropdown show-dropdown open",
  //     bg_checked: true,
  //     bgImage: this.props.bgImage,
  //   };
  // }
  // handleClick = () => {
  //   this.props.handleFixedClick();
  // };
  // onChangeClick = () => {
  //   this.props.handleHasImage(!this.state.bg_checked);
  //   this.setState({ bg_checked: !this.state.bg_checked });
  // };
  return (
    <div className="fixed-plugin">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-fixed-plugin"
          variant=""
          className="text-white border-0 opacity-100"
        >
          <i className="fas fa-cogs fa-2x mt-1"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <li className="adjustments-line d-flex align-items-center justify-content-between">
            <p>Background Image</p>
            <Form.Check
              type="switch"
              id="custom-switch-1-image"
              checked={hasImage}
              onChange={setHasImage}
            />
          </li>
          <li className="adjustments-line mt-3">
            <p>Filters</p>
            <div className="pull-right">
              <Badge
                variant="secondary"
                className={color === "black" ? "active" : ""}
                onClick={() => setColor("black")}
              ></Badge>
              <Badge
                variant="azure"
                className={color === "azure" ? "active" : ""}
                onClick={() => setColor("azure")}
              ></Badge>
              <Badge
                variant="green"
                className={color === "green" ? "active" : ""}
                onClick={() => setColor("green")}
              ></Badge>
              <Badge
                variant="orange"
                className={color === "orange" ? "active" : ""}
                onClick={() => setColor("orange")}
              ></Badge>
              <Badge
                variant="red"
                className={color === "red" ? "active" : ""}
                onClick={() => setColor("red")}
              ></Badge>
              <Badge
                variant="purple"
                className={color === "purple" ? "active" : ""}
                onClick={() => setColor("purple")}
              ></Badge>
            </div>
            <div className="clearfix"></div>
          </li>
          <li className="header-title">Sidebar Images</li>
          <li className={image === sideBarImage1 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage1);
              }}
            >
              <img alt="..." src={sideBarImage1}></img>
            </a>
          </li>
          <li className={image === sideBarImage2 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage2);
              }}
            >
              <img alt="..." src={sideBarImage2}></img>
            </a>
          </li>
          <li className={image === sideBarImage3 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage3);
              }}
            >
              <img alt="..." src={sideBarImage3}></img>
            </a>
          </li>
          <li className={image === sideBarImage4 ? "active" : ""}>
            <a
              className="img-holder switch-trigger d-block"
              href="#pablo"
              onClick={(e) => {
                e.preventDefault();
                setImage(sideBarImage4);
              }}
            >
              <img alt="..." src={sideBarImage4}></img>
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
          <li className="button-container">
            <div>
              <Button
                block
                className="btn-fill"
                href="http://www.creative-tim.com/product/light-bootstrap-dashboard-react"
                rel="noopener noreferrer"
                target="_blank"
                variant="default"
              >
                Checkout docs.
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
                variant="primary"
              >
                Get The PRO Version!
              </Button>
            </div>
          </li>
          <li className="header-title" id="sharrreTitle">
            Thank you for sharing!
          </li>
          <li className="button-container mb-4">
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

export default FixedPlugin;
