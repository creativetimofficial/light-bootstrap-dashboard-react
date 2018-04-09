import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";

class RowRoutingSystem extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Routing System
        </h1>
        <p className="bd-lead">
          For a better and easier way we've decided to create dynamic routes.
          You will find all our demo routes in:
        </p>
        <ul>
          <li>
            <code>src/routes/dashboad.jsx</code>{" "}
            <i>
              (these are the routes for the{" "}
              <code>src/layouts/Dashboard/Dashboard.jsx</code> pages)
            </i>
          </li>
          <li>
            <code>src/routes/index.jsx</code>{" "}
            <i>(these are the routes for the whole app)</i>
          </li>
        </ul>
        <p>Let's take a look at each one of them</p>
        <h2>
          <code>src/routes/index.jsx</code>
        </h2>
        <p>
          In this file you will see one route for the <code>Dashboard</code>{" "}
          layout.
        </p>
        <p>
          In case you want to add more layouts for your app, you can do so by
          adding here your route for your layout.
        </p>
        <h2>
          <code>src/routes/dashboad.jsx</code>
        </h2>
        <p>
          These are the routes used inside of{" "}
          <code>src/layouts/Dashboard/Dashboard.jsx</code> layout.
        </p>
        <p>
          These routes are also used to create the links that appear in the{" "}
          <code>Sidebar</code> component of the <code>Dashboard</code> layout.
        </p>
        <h2>Legend</h2>
        <ul>
          <li>
            <SyntaxHighlighter language="jsx" style={prism}>
              {`{ redirect: true, path: "/path/name", pathTo: "/path/to", name: "Name" }`}
            </SyntaxHighlighter>
            <ul>
              <li>
                <code>redirect</code> (used to tell our deom app components this
                is a redirect)
              </li>
              <li>
                <code>path</code> (which pathname to be redirected)
              </li>
              <li>
                <code>pathTo</code> (where to be redirected)
              </li>
              <li>
                <code>name</code> (name of your route - this will appear in the{" "}
                <code>Header</code> component)
              </li>
            </ul>
          </li>
          <li>
            <SyntaxHighlighter language="jsx" style={prism}>
              {`{ path: "/path/name", name: "Page Name", icon: "icon name", component: ComponentName},`}
            </SyntaxHighlighter>
            <ul>
              <li>
                <code>path</code> (path for your route - this will be seen in
                the browser url input)
              </li>
              <li>
                <code>name</code> (name of your route - this will appear in the{" "}
                <code>Sidebar</code> and <code>Header</code> components)
              </li>
              <li>
                <code>icon</code> (icon to be displayed alongside with links in{" "}
                <code>Sidebar</code> component)
              </li>
              <li>
                <code>component</code> (this is the page to be rendered)
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default RowRoutingSystem;
