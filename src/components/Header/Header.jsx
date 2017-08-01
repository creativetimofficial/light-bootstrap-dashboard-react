import React, {Component} from 'react';
import cx from 'classnames';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem, Dropdown } from 'react-bootstrap';

import Sidebar from 'components/Sidebar/Sidebar.jsx';

class Header extends Component{
    constructor(props){
        super(props);
        this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
        this.state = {
          sidebarExists: false
        };
    }
    mobileSidebarToggle(e){
        e.preventDefault();
        document.documentElement.classList.toggle('nav-open');
        var node = document.createElement('div');
        node.id = 'bodyClick';
        node.onclick = function(){
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle('nav-open');
        };
        document.body.appendChild(node);
        if(this.state.sidebarExists == false){
            this.setState({
                sidebarExists : true
            });
            var sidebar = document.getElementById('sidebar').cloneNode(true);
            var navbar = document.getElementsByTagName('nav')[0];
            // alert(sidebar.getElementsByClassName('logo').length);
            var div = document.createElement('div');
            div.className = "collapse navbar-collapse has-image";
            div.appendChild(sidebar.getElementsByClassName('logo')[0]);
            sidebar = sidebar.getElementsByClassName('nav')[0];
            sidebar.innerHTML += navbar.innerHTML;
            // sidebar.innerHTML += navbar.getElementsByTagName('ul')[1].innerHTML;
            div.appendChild(sidebar);


            // div.dataColor = "purple";
            document.body.appendChild(div);
        }
    }
    render(){
        const notification = (
            <div>
                <i className="fa fa-globe"></i>
                <b className="caret"></b>
                <span className="notification">5</span>
            </div>
        );
        return (
            <Navbar fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">{this.props.location.pathname.charAt(1).toUpperCase() + this.props.location.pathname.slice(2)}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={this.mobileSidebarToggle}/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
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
                    </Nav>
                    <Nav pullRight>
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
