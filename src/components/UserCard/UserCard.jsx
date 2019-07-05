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

export class UserCard extends Component {
  render() {
    return (
      <div className="card card-user">
        <div className="image">
          <img src={this.props.bgImage} alt="..." />
        </div>
        <div className="content">
          <div className="author">
            <a href="#pablo">
              <img
                className="avatar border-gray"
                src={this.props.avatar}
                alt="..."
              />
              <h4 className="title">
                {this.props.name}
                <br />
                <small>{this.props.userName}</small>
              </h4>
            </a>
          </div>
          <p className="description text-center">{this.props.description}</p>
        </div>
        <hr />
        <div className="text-center">{this.props.socials}</div>
      </div>
    );
  }
}

export default UserCard;
