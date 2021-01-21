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
import { Link } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import { Row, Col, Card } from "react-bootstrap";

const codeImport = `import icons from 'variables/icons';`;

const codeExample = `<Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
  <Card>
    <Card.Body className="all-icons">
      <Row>
        <Col className="font-icon-list">
            <i className="nc-icon nc-backpack" />
        </Col>
      </Row>
    </Card.Body>
  </Card>
</Col>`;

class Icons extends React.Component {
  render() {
    return (
      <div>
        <h1 className="bd-title" id="content">
          Icons
        </h1>
        <p className="bd-lead">
          For this dashboard we've used 100 awesome nucleo icons handcrafted by
          our friends from{" "}
          <a href="https://nucleoapp.com/?ref=1712" target="_blank">
            NucleoApp
          </a>
          .
        </p>
        <h3 id="content">Examples</h3>
        <div className="bd-example">
          <Col lg={3} md={4} sm={5} xs={7} className="font-icon-list">
            <Card>
              <Card.Body className="all-icons">
                <Row>
                  <Col className="font-icon-list">
                    <i className="nc-icon nc-backpack" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <p>
          Check all available icons <Link to="/admin/icons">here</Link>.
        </p>
        <p>
          Beside these, you can also use all of the{" "}
          <a
            href="https://fontawesome.com/?ref=creativetim"
            target="_blank"
            rel="noopener noreferrer"
          >
            free font awesome ones
          </a>
          .
        </p>
      </div>
    );
  }
}

export default Icons;
