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
import { Table, Card, Button, Row, Col } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";
import ChartistGraph from "react-chartist";

import avatar from "assets/img/faces/face-3.jpg";

var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695],
  ],
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false,
  },
  height: "245px",
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        },
      },
    },
  ],
];

const codeExampleChartCard = `import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import {
  Card,
  Row,
  Col
} from "react-bootstrap";

function Example() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h4">2017 Sales</Card.Title>
              <p className="card-category">All products including Taxes</p>
            </Card.Header>
            <Card.Body>
              <div className="ct-chart" id="chartActivity">
                <ChartistGraph
                  data={{
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "Mai",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    series: [
                      [
                        542,
                        443,
                        320,
                        780,
                        553,
                        453,
                        326,
                        434,
                        568,
                        610,
                        756,
                        895,
                      ],
                      [
                        412,
                        243,
                        280,
                        580,
                        453,
                        353,
                        300,
                        364,
                        368,
                        410,
                        636,
                        695,
                      ],
                    ],
                  }}
                  type="Bar"
                  options={{
                    seriesBarDistance: 10,
                    axisX: {
                      showGrid: false,
                    },
                    height: "245px",
                  }}
                  responsiveOptions={[
                    [
                      "screen and (max-width: 640px)",
                      {
                        seriesBarDistance: 5,
                        axisX: {
                          labelInterpolationFnc: function (value) {
                            return value[0];
                          },
                        },
                      },
                    ],
                  ]}
                />
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="legend">
                <i className="fas fa-circle text-info"></i>
                Tesla Model S <i className="fas fa-circle text-danger"></i>
                BMW 5 Series
              </div>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-check"></i>
                Data information certified
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Example;`;

const codeExampleUserCard = `import React from "react";

// react-bootstrap components
import {
  Button,
  Card,
  Row,
  Col,
} from "react-bootstrap";

function Example() {
  return (
    <>
      <Row>
        <Col md="8">
          <Card className="card-user">
            <div className="card-image">
              <img
                alt="..."
                src={
                  require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                    .default
                }
              ></img>
            </div>
            <Card.Body>
              <div className="author">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={require("assets/img/faces/face-3.jpg").default}
                  ></img>
                  <h5 className="title">Mike Andrew</h5>
                </a>
                <p className="description">michael24</p>
              </div>
              <p className="description text-center">
                "Lamborghini Mercy <br></br>
                Your chick she so thirsty <br></br>
                I'm in that two seat Lambo"
              </p>
            </Card.Body>
            <hr></hr>
            <div className="button-container mr-auto ml-auto">
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-google-plus-square"></i>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Example;
`;

const statsCardExample = `import React from "react";
// react-bootstrap components
import {
  Card,
  Row,
  Col
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Row>
        <Col md="6">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="5">
                  <div className="icon-big text-center icon-warning">
                    <i className="nc-icon nc-chart text-warning"></i>
                  </div>
                </Col>
                <Col xs="7">
                  <div className="numbers">
                    <p className="card-category">Number</p>
                    <Card.Title as="h4">150GB</Card.Title>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                Update Now
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
`;

class RowCard extends Component {
  render() {
    return (
      <div id="card-row" className="tim-row">
        <h2>Cards</h2>
        <legend />
        <h3>Chart Card example</h3>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title as="h4">2017 Sales</Card.Title>
                <p className="card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "Mai",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                      ],
                      series: [
                        [
                          542,
                          443,
                          320,
                          780,
                          553,
                          453,
                          326,
                          434,
                          568,
                          610,
                          756,
                          895,
                        ],
                        [
                          412,
                          243,
                          280,
                          580,
                          453,
                          353,
                          300,
                          364,
                          368,
                          410,
                          636,
                          695,
                        ],
                      ],
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
                          seriesBarDistance: 5,
                          axisX: {
                            labelInterpolationFnc: function (value) {
                              return value[0];
                            },
                          },
                        },
                      ],
                    ]}
                  />
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Tesla Model S <i className="fas fa-circle text-danger"></i>
                  BMW 5 Series
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleChartCard}
        </SyntaxHighlighter>
        <h3>User Card example</h3>
        <Row>
          <Col md="8">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    <h5 className="title">Mike Andrew</h5>
                  </a>
                  <p className="description">michael24</p>
                </div>
                <p className="description text-center">
                  "Lamborghini Mercy <br></br>
                  Your chick she so thirsty <br></br>
                  I'm in that two seat Lambo"
                </p>
              </Card.Body>
              <hr></hr>
              <div className="button-container mr-auto ml-auto">
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-facebook-square"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
                <Button
                  className="btn-simple btn-icon"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  variant="link"
                >
                  <i className="fab fa-google-plus-square"></i>
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleUserCard}
        </SyntaxHighlighter>
        <h3>Stats Card example</h3>
        <div className="container-fluid">
          <Row>
            <Col md="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-chart text-warning"></i>
                      </div>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Number</p>
                        <Card.Title as="h4">150GB</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-redo mr-1"></i>
                    Update Now
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {statsCardExample}
        </SyntaxHighlighter>
        <h4>Props</h4>
        <p>
          Beside these props you can also reffer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/cards/"
            target="_blank"
            rel="noopener noreferrer"
          >
            react-bootstrap documentation
          </a>
          .
        </p>
      </div>
    );
  }
}

export default RowCard;
