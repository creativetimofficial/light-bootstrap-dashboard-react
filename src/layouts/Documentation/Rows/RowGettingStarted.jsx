import React, { Component } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

const fileStructure = `Light Bootstrap Dashboard React
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── package.json
├── Documentation
│   ├── css
│   ├── img
│   └── tutorial-components.html
├── public
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── sidebar-5.jpg
└── src
    ├── index.js
    ├── assets
    │   ├── css
    │   ├── fonts
    │   ├── img
    │   │   └── faces
    │   └── sass
    │       ├── lbd
    │       │   └── mixins
    │       ├── light-bootstrap-dashboard.css
    │       └── light-bootstrap-dashboard.scss
    ├── components
    │   ├── Card
    │   │   └── Card.jsx
    │   ├── CustomButton
    │   │   └── CustomButton.jsx
    │   ├── CustomCheckbox
    │   │   └── CustomCheckbox.jsx
    │   ├── CustomRadio
    │   │   └── CustomRadio.jsx
    │   ├── Footer
    │   │   └── Footer.jsx
    │   ├── FormInputs
    │   │   └── FormInputs.jsx
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   └── HeaderLinks.jsx
    │   ├── Sidebar
    │   │   └── Sidebar.jsx
    │   ├── StatsCard
    │   │   └── StatsCard.jsx
    │   ├── Tasks
    │   │   └── Tasks.jsx
    │   └── UserCard
    │       └── UserCard.jsx
    ├── layouts
    │   └── Dashboard
    │       └── Dashboard.jsx
    ├── routes
    │   ├── dashboard.jsx
    │   └── index.jsx
    ├── variables
    │   └── Variables.jsx
    └── views
        ├── Dashboard
        │   └── Dashboard.jsx
        ├── Icons
        │   └── Icons.jsx
        ├── Maps
        │   └── Maps.jsx
        ├── Notifications
        │   └── Notifications.jsx
        ├── TableList
        │   └── TableList.jsx
        ├── Typography
        │   └── Typography.jsx
        ├── Upgrade
        │   └── Upgrade.jsx
        └── UserProfile
            └── UserProfile.jsx`;

class RowGettingStarted extends Component {
  render() {
    return (
      <div id="getting-started-row" className="tim-row">
        <h2>Getting started</h2>
        <legend />
        <p>
          <b>The Light Bootstrap Dashboard with React</b> is built on top of
          Bootstrap 3, so you can safely use it on your existing or new
          Bootstrap project. No line of code from Bootstrap 3 was changed, so
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
            Navigate to{" "}
            <code>http://localhost:3000</code>
          </li>
          <li>
            If you don't have cross-env installed globally then run in terminal
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm i -g cross-env`}
            </SyntaxHighlighter>
          </li>
        </ul>
        <p>You can additionaly use these commands:</p>
        <ul>
          <li>
            in terminal
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm test`}
            </SyntaxHighlighter>
            (runs the test watcher in an interactive mode)
          </li>
          <li>
            in terminal
            <SyntaxHighlighter language="jsx" style={prism}>
              {`npm run build`}
            </SyntaxHighlighter>
            (builds the app for production to the <code>build</code> folder)
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
          </a>.
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
