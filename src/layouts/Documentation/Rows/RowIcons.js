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
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeExmaple = `<div className="row all-icons">
    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
        <div className="font-icon-detail">
            <i className="pe-7s-next-2"></i>
            <input type="text" defaultValue="pe-7s-next-2" />
        </div>
    </div>
</div>`;

class RowIcons extends Component {
  render() {
    return (
      <div id="icons-row" className="tim-row">
        <h2>Icons</h2>
        <legend />
        <p>
          We used the default icons from{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://themes-pixeden.com/font-demos/7-stroke/index.html"
          >
            Pixeden
          </a>
          .
        </p>

        <h4>Example code</h4>
        <div className="row all-icons">
          <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
            <div className="font-icon-detail">
              <i className="pe-7s-next-2" />
              <input type="text" defaultValue="pe-7s-next-2" />
            </div>
          </div>
        </div>

        <br />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExmaple}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default RowIcons;
