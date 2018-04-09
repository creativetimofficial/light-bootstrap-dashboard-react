import React, { Component } from "react";
import { Table } from "react-bootstrap";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { prism } from "react-syntax-highlighter/styles/prism";
import ChartistGraph from "react-chartist";

import { Card } from "components/Card/Card.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";

import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

const codeExampleImport = `import {Card} from 'components/Card/Card.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';`;

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
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};
var optionsBar = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: "245px"
};
var responsiveBar = [
  [
    "screen and (max-width: 640px)",
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];

const codeExamplePlainCardChart = `var dataBar = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
        [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
        [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
    ]
};
var optionsBar = {
    seriesBarDistance: 10,
    axisX: {
        showGrid: false
    },
    height: "245px"
};
var responsiveBar = [
    ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
            labelInterpolationFnc: function (value) {
                return value[0];
            }
        }
    }]
];`;

const codeExamplePlainCard = `<div className="row">
    <div className="col-md-6">
        <Card
            title="2014 Sales"
            category="All products including Taxes"
            stats="Data information certified"
            statsIcon="fa fa-check"
            content={
                <div id="chartActivity" className="ct-chart">
                    <ChartistGraph
                        data={dataBar}
                        type="Bar"
                        options={optionsBar}
                        responsiveOptions={responsiveBar}
                    />
                </div>
            }
            legend={
                <div className="legend">
                    <i className="fa fa-circle text-info"></i> Tesla Model S
                    <i className="fa fa-circle text-danger"></i> BMW 5 Series
                </div>
            }
        />
    </div>
</div>`;

const codeExampleUserCardAvatar = `import avatar from "assets/img/faces/face-3.jpg";`;

const codeExampleUserCard = `<div className="row">
    <div className="col-md-4">
        <UserCard
            bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
            avatar={avatar}
            name="Mike Andrew"
            userName="michael24"
            description={
                <span>
                    "Lamborghini Mercy
                    <br />
                    Your chick she so thirsty
                    <br />
                    I'm in that two seat Lambo"
                </span>
            }
            socials={
                <div>
                    <Button simple>
                        <i className="fa fa-facebook-square"></i>
                    </Button>
                    <Button simple>
                        <i className="fa fa-twitter"></i>
                    </Button>
                    <Button simple>
                        <i className="fa fa-google-plus-square"></i>
                    </Button>
                </div>
            }
        />
    </div>
</div>`;

const statsCardExample = `<div className="container-fluid">
    <div className="row">
        <div className="col-lg-4 col-sm-8">
            <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success"></i>}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o"></i>}
                statsIconText="Last day"
            />
        </div>
    </div>
</div>`;

class RowCard extends Component {
  render() {
    return (
      <div id="card-row" className="tim-row">
        <h2>Cards</h2>
        <legend />
        <p>
          We've created three types of cards, one is for simple use, one is for
          creating user cards and the last one is for creating stats cards. They
          have to be imported where you use them like this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleImport}
        </SyntaxHighlighter>
        <h3>Plain Card example</h3>
        <div className="row">
          <div className="col-md-6">
            <Card
              title="2014 Sales"
              category="All products including Taxes"
              stats="Data information certified"
              statsIcon="fa fa-check"
              content={
                <div id="chartActivity" className="ct-chart">
                  <ChartistGraph
                    data={dataBar}
                    type="Bar"
                    options={optionsBar}
                    responsiveOptions={responsiveBar}
                  />
                </div>
              }
              legend={
                <div className="legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S
                  <i className="fa fa-circle text-danger" /> BMW 5 Series
                </div>
              }
            />
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplePlainCard}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplePlainCardChart}
        </SyntaxHighlighter>
        <h4>Props</h4>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>plain</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>
                Use this flag to make the card plain (no <code>background</code>).
              </td>
            </tr>
            <tr>
              <td>
                <code>title</code>
              </td>
              <td>string / node</td>
              <td>null</td>
              <td>Use this flag to set the title of the card.</td>
            </tr>
            <tr>
              <td>
                <code>category</code>
              </td>
              <td>string / node</td>
              <td>null</td>
              <td>Use this flag to set the category of the card.</td>
            </tr>
            <tr>
              <td>
                <code>ctAllIcons</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Use this flag to add <code>className</code>{" "}
                <code>all-icons</code> to the content of the card.
              </td>
            </tr>
            <tr>
              <td>
                <code>ctTableFullWidth</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Use this flag to add <code>className</code>{" "}
                <code>table-full-width</code> to the content of the card.
              </td>
            </tr>
            <tr>
              <td>
                <code>ctTableResponsive</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Use this flag to add <code>className</code>{" "}
                <code>table-responsive</code> to the content of the card.
              </td>
            </tr>
            <tr>
              <td>
                <code>ctTableUpgrade</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Use this flag to add <code>className</code>{" "}
                <code>table-upgrade</code> to the content of the card.
              </td>
            </tr>
            <tr>
              <td>
                <code>hCenter</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>
                Use this flag to add <code>className</code>{" "}
                <code>text-center</code> to the header of the card.
              </td>
            </tr>
            <tr>
              <td>
                <code>content</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the content of the card.</td>
            </tr>
            <tr>
              <td>
                <code>legend</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the legend of the card.</td>
            </tr>
            <tr>
              <td>
                <code>statsIcon</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set one stats icon to the card.</td>
            </tr>
            <tr>
              <td>
                <code>stats</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the text to the stats icon.</td>
            </tr>
          </tbody>
        </Table>
        <h3>User Card example</h3>
        <div className="row">
          <div className="col-md-4">
            <UserCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              avatar={avatar}
              name="Mike Andrew"
              userName="michael24"
              description={
                <span>
                  "Lamborghini Mercy
                  <br />
                  Your chick she so thirsty
                  <br />
                  I'm in that two seat Lambo"
                </span>
              }
              socials={
                <div>
                  <Button simple>
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button simple>
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button simple>
                    <i className="fa fa-google-plus-square" />
                  </Button>
                </div>
              }
            />
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleUserCardAvatar}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleUserCard}
        </SyntaxHighlighter>
        <h4>Props</h4>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>bgImage</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the background image for the card.</td>
            </tr>
            <tr>
              <td>
                <code>avatar</code>
              </td>
              <td>string / react element</td>
              <td>null</td>
              <td>
                Use this flag to set the avatar of the card. (if you use the
                string method, the image has to be in public folder, if you use
                the react import method, the image has to be in src folder)
              </td>
            </tr>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the name of the user.</td>
            </tr>
            <tr>
              <td>
                <code>userName</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the username of the user.</td>
            </tr>
            <tr>
              <td>
                <code>description</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the user description.</td>
            </tr>
            <tr>
              <td>
                <code>socials</code>
              </td>
              <td>html components</td>
              <td>null</td>
              <td>Use this flag to set user's socials.</td>
            </tr>
          </tbody>
        </Table>
        <h3>Stats Card example</h3>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-sm-8">
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Last day"
              />
            </div>
          </div>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {statsCardExample}
        </SyntaxHighlighter>
        <h4>Props</h4>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>bigIcon</code>
              </td>
              <td>html component</td>
              <td>null</td>
              <td>Use this flag to set the main stats card image.</td>
            </tr>
            <tr>
              <td>
                <code>statsText</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the main stats card text.</td>
            </tr>
            <tr>
              <td>
                <code>statsValue</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the main stats card value.</td>
            </tr>
            <tr>
              <td>
                <code>statsIcon</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the footers card icon.</td>
            </tr>
            <tr>
              <td>
                <code>statsIconText</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to set the footers card text.</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default RowCard;
