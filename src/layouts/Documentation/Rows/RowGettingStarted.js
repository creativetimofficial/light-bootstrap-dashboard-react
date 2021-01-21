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

const fileStructure = `light-bootstrap-dashboard-react
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── gulpfile.js
├── jsconfig.json
├── package.json
├── Documentation
│   ├── css
│   │   ├── demo.css
│   │   ├── documentation.css
│   │   └── light-bootstrap-dashboard.css
│   ├── img
│   └── tutorial-components.html
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── index.js
    ├── logo.svg
    ├── routes.js
    ├── assets
    │   ├── css
    │   │   ├── animate.min.css
    │   │   ├── demo.css
    │   │   ├── light-bootstrap-dashboard-react.css
    │   │   ├── light-bootstrap-dashboard-react.css.map
    │   │   └── light-bootstrap-dashboard-react.min.css
    │   ├── fonts
    │   │   ├── nucleo-icons.eot
    │   │   ├── nucleo-icons.svg
    │   │   ├── nucleo-icons.ttf
    │   │   ├── nucleo-icons.woff
    │   │   └── nucleo-icons.woff2
    │   ├── img
    │   │   └── faces
    │   └── scss
    │       ├── lbd
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── lbdr
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── light-bootstrap-dashboard-react.scss
    ├── layouts
    │   └── Admin.js
    ├── components
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── Navbars
    │   │   └── AdminNavbar.js
    │   └── Sidebar
    │       └── Sidebar.js
    └── views
        ├── Dashboard.js
        ├── Icons.js
        ├── Maps.js
        ├── Notifications.js
        ├── TableList.js
        ├── Typography.js
        ├── Upgrade.js
        └── UserProfile.js`;

class RowGettingStarted extends Component {
  render() {
    return (
      <div id="getting-started-row" className="tim-row">
        <h2>Getting started</h2>
        <legend />
        <p>
          <b>The Light Bootstrap Dashboard with React</b> is built on top of
          Bootstrap 4, so you can safely use it on your existing or new
          Bootstrap project. No line of code from Bootstrap 4 was changed, so
          you don't have to worry about undesired effects in your work.
        </p>
        <ul>
          <li>
            Install NodeJs from{" "}
            <a href="https://nodejs.org/en/">NodeJs Official Page</a>
          </li>
          <li>Open Terminal</li>
          <li>Go to your file project</li>
          <li>
            Run in terminal:
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm install`}
            </SyntaxHighlighter>
          </li>
          <li>
            Then:
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm start`}
            </SyntaxHighlighter>
          </li>
          <li>
            Navigate to <code>http://localhost:3000</code>
          </li>
        </ul>
        <p>
          Also, for additional information you can refer to{" "}
          <a
            href="https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create React App documentation
          </a>
          .
        </p>
        <h3>File structure</h3>
        <SyntaxHighlighter language="jsx" style={prism}>
          {fileStructure}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default RowGettingStarted;
