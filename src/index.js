import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import ReactGA from "react-ga";
import ReactPixel from "react-facebook-pixel";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "assets/css/demo.css";
import "assets/css/pe-icon-7-stroke.css";
import "layouts/Documentation/assets/css/documentation.css";

import AdminLayout from "layouts/Admin.jsx";
import DocumentationLayout from "layouts/Documentation/Documentation.jsx";

const history = createBrowserHistory();

ReactPixel.init("111649226022273");
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

ReactGA.initialize("UA-46172202-1");
ReactGA.set({
  page: window.location.pathname + window.location.search
});
ReactGA.pageview(window.location.pathname + window.location.search);

history.listen(location => {
  ReactGA.set({
    page: window.location.pathname + window.location.search
  });
  ReactGA.pageview(window.location.pathname + window.location.search);

  ReactPixel.pageView();
  ReactPixel.fbq("track", "PageView");
});

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Switch>
        <Route path="/admin" render={props => <AdminLayout {...props} />} />
        <Route
          path="/documentation"
          render={props => <DocumentationLayout {...props} />}
        />
        <Redirect from="/" to="/admin/dashboard" />
      </Switch>
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
