import React, { Component } from "react";
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeExample = `<Navbar collapseOnSelect fluid>
    <Navbar.Header>
        <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        <Nav>
            <NavItem eventKey={1} href="#">
                <i className="fa fa-dashboard"></i>
                <p className="hidden-lg hidden-md">Dashboard</p>
            </NavItem>
            <NavDropdown eventKey={2} title={notification} noCaret id="basic-nav-dropdown">
                <MenuItem eventKey={2.1}>Notification 1</MenuItem>
                <MenuItem eventKey={2.2}>Notification 2</MenuItem>
                <MenuItem eventKey={2.3}>Notification 3</MenuItem>
                <MenuItem eventKey={2.4}>Notification 4</MenuItem>
                <MenuItem eventKey={2.5}>Another notifications</MenuItem>
            </NavDropdown>
            <NavItem eventKey={3} href="#">
                <i className="fa fa-search"></i>
                <p className="hidden-lg hidden-md">Search</p>
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
</Navbar>`;

const codeExampleIcon = `const notification = (
    <div>
        <i className="fa fa-globe"></i>
        <b className="caret"></b>
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
    </div>
);`;

const notification = (
  <div>
    <i className="fa fa-globe" />
    <b className="caret" />
    <span className="notification">5</span>
    <p className="hidden-lg hidden-md">Notification</p>
  </div>
);

class RowDropdown extends Component {
  render() {
    return (
      <div id="dropdown-row" className="tim-row">
        <h2>Dropdowns</h2>
        <legend />
        <h4>Example code of simple Dropdown and Dropdown with Icon</h4>
        <Navbar collapseOnSelect fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <i className="fa fa-dashboard" />
                <p className="hidden-lg hidden-md">Dashboard</p>
              </NavItem>
              <NavDropdown
                eventKey={2}
                title={notification}
                noCaret
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={2.1}>Notification 1</MenuItem>
                <MenuItem eventKey={2.2}>Notification 2</MenuItem>
                <MenuItem eventKey={2.3}>Notification 3</MenuItem>
                <MenuItem eventKey={2.4}>Notification 4</MenuItem>
                <MenuItem eventKey={2.5}>Another notifications</MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="#">
                <i className="fa fa-search" />
                <p className="hidden-lg hidden-md">Search</p>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Account
              </NavItem>
              <NavDropdown
                eventKey={2}
                title="Dropdown"
                id="basic-nav-dropdown-right"
              >
                <MenuItem eventKey={2.1}>Action</MenuItem>
                <MenuItem eventKey={2.2}>Another action</MenuItem>
                <MenuItem eventKey={2.3}>Something</MenuItem>
                <MenuItem eventKey={2.4}>Another action</MenuItem>
                <MenuItem eventKey={2.5}>Something</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.5}>Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="#">
                Log out
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <br />

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleIcon}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>

        <h4>Details</h4>

        <p>
          For more details please refer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/navs/#navs-dropdown"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-bootstrap documentation
          </a>.
        </p>

        <div className="alert alert-warning">
          <strong>Warning!</strong> These type of dropdowns are used within{" "}
          <code>Navbar</code> components from react-bootstrap.
          <br />For usage of normal dropdowns please refer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/dropdowns/#btn-dropdowns"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-bootstrap documentation
          </a>.
        </div>
      </div>
    );
  }
}

export default RowDropdown;
