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
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

class GoogleMaps extends React.Component {
  render() {
    return (
      <div>
        <h1>Google Maps</h1>
        <p className="lead">
          Our Map components uses the Google Maps API and it comes with a custom
          interface that matches the theme’s colours. Keep reading our Maps
          examples and learn how to use this plugin.
        </p>
        <h2>Usage</h2>
        <p>
          In order to use this plugin on your page you will need to include the
          following script inside your <code>public/index.html</code> page,
          right before the end of the <code>{`</head>`}</code> tag:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE"></script>`}
        </SyntaxHighlighter>
        <h2>Get your API key</h2>
        <p>
          In order to get your Google Maps API key navigate to the following
          page:{" "}
          <a
            className="font-medium text-indigo-600"
            href="https://developers.google.com/maps/documentation/javascript/get-api-key?ref=creativetim"
            rel="nofollow"
            target="_blank"
          >
            Google Maps
          </a>
          . After you’ve got your api key, you will need to replace in the above
          script, the <code>YOUR_API_KEY_HERE</code> with that key.
        </p>
        <p>
          Read more about Google Maps on their own website:{" "}
          <a
            className="font-medium text-indigo-600"
            href="https://developers.google.com/maps/documentation/javascript/overview?ref=creativetim"
            rel="nofollow"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>
    );
  }
}

export default GoogleMaps;
