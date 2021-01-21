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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeSidebar = `<li className={this.activeRoute("/table")}>
    <NavLink to={'/table'} className="nav-link" activeClassName="active">
        <i className="pe-7s-note2"></i>
        <p>Table List</p>
    </NavLink>
</li>`;
const codeSidebarApp = `<Route path="/table" component={TableList}/>`;
const codeSidebarImages = `import imagine from 'assets/img/sidebar-5.jpg';
import logo from 'assets/img/reactlogo.png';`;

class RowNavigation extends Component {
  render() {
    return (
      <div id="navbar-row" className="tim-row">
        <h2>Navigation</h2>
        <legend />
        <p>
          For navigation there are three main components <code>Sidebar</code>,{" "}
          <code>AdminNavbar</code> and <code>Footer</code>.
        </p>
        <h3>Sidebar</h3>
        <p>
          This component is the main navigation. To use it, you need to import
          it:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Sidebar from 'components/Sidebar/Sidebar.js';`}
        </SyntaxHighlighter>
        <p>This component is the left menu.</p>
        <p>
          For it to work, it has two main components. The first one you will
          find it in <code>src/components/Sidebar/Sidebar.js</code>. This is the
          component from the <code>Sidebar</code> component itself. We{"'"}ve
          decided to create a variable for the routes, these are found in{" "}
          <code>src/routes.js</code>. We import them in this componente (
          <code>Sidebar</code>) and create a navigation link to each one. These
          navigation links took like this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSidebar}
        </SyntaxHighlighter>
        <p>
          You can see here <code>/table</code>. This is the route that will be
          shown in the browser.
        </p>
        <p>
          This component is tied to the second main component in{" "}
          <code>src/layouts/Dashboard/Dashboard.js</code>. Here you will find
          the routes for the <code>Sidebar</code> component. Again, we import
          them here as well and create them dynamically. These look like this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSidebarApp}
        </SyntaxHighlighter>
        <p>
          You can se here the same path as before (as in <code>Sidebar</code>){" "}
          <code>/table</code>. You then have to specify what has to be rendered
          on user click, in this example is <code>TableList</code>.
        </p>
        <p>
          If you want to change the logo and background image, you will have to
          import them in
          <code>src/components/Sidebar/Sidebar.js</code> like this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSidebarImages}
        </SyntaxHighlighter>
        <p>
          where <code>imagine</code> is the background image and{" "}
          <code>logo</code> is the logo image.
        </p>
        <p>
          To change the color of the sidebar use the <code>data-color</code>{" "}
          property in <code>Sidebar</code> componet.
        </p>
        <h3>AdminNavbar</h3>
        <p>
          This component is the header navigation. To use it, you need to import
          it:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Header from 'components/Navbars/AdminNavbar.js';`}
        </SyntaxHighlighter>
        <p>
          This component was made using react-bootstrap components. For more
          information please refer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/navbar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-bootstrap documentation
          </a>
          .
        </p>
        <div className="alert alert-warning">
          <strong>Warning!</strong> For this component to work properly, do not
          change the <code>onClick</code> property in the{" "}
          <code>Navbar.Toggle</code> element of the <code>Header</code>.
        </div>
        <h3>Footer</h3>
        <p>This is the footer navigation. To use it, you need to import it:</p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Footer from 'components/Footer/Footer.js';`}
        </SyntaxHighlighter>
        <p>
          You can change it's elements in{" "}
          <code>src/components/Footer/Footer.js</code>.
        </p>
      </div>
    );
  }
}

export default RowNavigation;
