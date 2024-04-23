/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import avatar from 'assets/img/avatar.png';

import routes from "routes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  // const getBrandText = () => {
  //   for (let i = 0; i < routes.length; i++) {
  //     if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
  //       return routes[i].name;
  //     }
  //   }
  //   return "Brand";
  // };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            <img src={avatar} alt="avatar" 
              style={{
                borderRadius: '50%', // Makes the image round
                width: '100px',     // Sets the width of the image
                height: '100px'     // Sets the height of the image
              }} 
            />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <div class="user-portfolio" style={{padding:'20px',textAlign:"left",}}>
          
          <div class="user-portfolio-title" style={{fontSize:'25px'}}>Influencer Portfolio</div>
          <div class="user-portfolio-content" style={{display:'flex',gap:"10px"}}> 
               <div class="follow" style={{display:"flex",gap:"5px"}}><div>8</div> <div class="follow-text" style={{color:"#888888"}}>Followings</div></div>
               <div class="follow" style={{display:"flex",gap:"5px"}}><div>33k</div> <div class="follow-text" style={{color:"#888888"}}>Followings</div></div>
          </div>
        </div>
        <Nav className="ml-auto" navbar>
          <Nav.Item>
            <Nav.Link
              className="m-0"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <span className="no-icon">Log out</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
