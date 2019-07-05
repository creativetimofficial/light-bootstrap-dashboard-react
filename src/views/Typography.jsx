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
import { Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";

class Typography extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Light Bootstrap Table Heading"
                category="Created using Roboto Font Family"
                content={
                  <div>
                    <div className="typo-line">
                      <h1>
                        <p className="category">Header 1</p>Light Bootstrap
                        Table Heading{" "}
                      </h1>
                    </div>

                    <div className="typo-line">
                      <h2>
                        <p className="category">Header 2</p>Light Bootstrap
                        Table Heading
                      </h2>
                    </div>
                    <div className="typo-line">
                      <h3>
                        <p className="category">Header 3</p>Light Bootstrap
                        Table Heading
                      </h3>
                    </div>
                    <div className="typo-line">
                      <h4>
                        <p className="category">Header 4</p>Light Bootstrap
                        Table Heading
                      </h4>
                    </div>
                    <div className="typo-line">
                      <h5>
                        <p className="category">Header 5</p>Light Bootstrap
                        Table Heading
                      </h5>
                    </div>
                    <div className="typo-line">
                      <h6>
                        <p className="category">Header 6</p>Light Bootstrap
                        Table Heading
                      </h6>
                    </div>
                    <div className="typo-line">
                      <p>
                        <span className="category">Paragraph</span>Lorem ipsum
                        dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim veniam.
                      </p>
                    </div>
                    <div className="typo-line">
                      <p className="category">Quote</p>
                      <blockquote>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit, sed diam nonummy nibh euismod tincidunt ut
                          laoreet dolore magna aliquam erat volutpat. Ut wisi
                          enim ad minim veniam.
                        </p>
                        <small>Steve Jobs, CEO Apple</small>
                      </blockquote>
                    </div>

                    <div className="typo-line">
                      <p className="category">Muted Text</p>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit, sed diam nonummy nibh euismod tincidunt ut
                        laoreet.
                      </p>
                    </div>
                    <div className="typo-line">
                      {/* <!--
                                             there are also "text-info", "text-success", "text-warning", "text-danger" clases for the text
                                             --> */}
                      <p className="category">Coloured Text</p>
                      <p className="text-primary">
                        Text Primary - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-info">
                        Text Info - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-success">
                        Text Success - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-warning">
                        Text Warning - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                      <p className="text-danger">
                        Text Danger - Light Bootstrap Table Heading and complex
                        bootstrap dashboard you've ever seen on the internet.
                      </p>
                    </div>

                    <div className="typo-line">
                      <h2>
                        <p className="category">Small Tag</p>Header with small
                        subtitle <br />
                        <small>".small" is a tag for the headers</small>{" "}
                      </h2>
                    </div>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Typography;
