import React from "react";
import ChartistGraph from "react-chartist";
import { useState, useEffect } from "react";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState({
    roomNumber: "Loading...",
    revenue: "Loading...",
    errors: "Loading...",
    followers: "Loading...",
    userTrend: { labels: [], series: [] },
    attitudeStats: { labels: [], series: [] },
    giftRanking: { labels: [], series: [] },
    taskList:[]
  });

  useEffect(() => {
    fetch('http://localhost:5000/data')
      .then(response => response.json())
      .then(data => {
        console.log(data);  // Logging the data received from the API
        
        // Destructuring for easier access
        const { keys, values } = data.gift_ranking;
  
        // Create an array of key-value pairs and sort by value
        let combined = keys.map((key, index) => ({ key, value: values[index] }));
        combined.sort((a, b) => a.value - b.value); // Sort from largest to smallest value
  
        // Separate keys and values after sorting
        const sortedKeys = combined.map(item => item.key);
        const sortedValues = combined.map(item => item.value);
  
        setDashboardData({
          roomNumber: data.room_number,
          revenue: data.revenue,
          followers: data.followers,
          userTrend: {
            labels: data.user_trend.labels,
            series: data.user_trend.series
          },
          attitudeStats: {
            labels: data.attitude_stats.labels,
            series: [data.attitude_stats.series]  // Assuming series is an array
          },
          giftRanking: {
            labels: sortedKeys,
            series: [sortedValues]  // Now sorted
          },
          taskList:data.tasks
        });
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  

  console.log(dashboardData.giftRanking)

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
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
                      <p className="card-category">Room Number</p>
                      <Card.Title as="h4">{dashboardData.roomNumber}</Card.Title>
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
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ {dashboardData.revenue}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Last day
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart-bar-32 text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Ranking</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  In the last hour
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">New Followers</p>
                      <Card.Title as="h4">+{dashboardData.followers}</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Update now
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Users Trend</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ChartistGraph
                    data={dashboardData.userTrend}
                    type="Line"
                    options={{
                      low: 0,
                      high: 1500,
                      showArea: false,
                      height: "245px",
                      axisX: {
                        showGrid: false,
                      },
                      lineSmooth: true,
                      showLine: true,
                      showPoint: true,
                      fullWidth: true,
                      chartPadding: {
                        right: 50,
                      },
                    }}
                    responsiveOptions={[
                      [
                        "screen and (max-width: 640px)",
                        {
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
                  Total viewers <i className="fas fa-circle text-danger"></i>
                  Non-followers 
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Attitute Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  <ChartistGraph
                  data={{
                      labels: dashboardData.attitudeStats.labels,
                      series: dashboardData.attitudeStats.series[0],
                    }}
                    type="Pie"
                  />
                </div>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  {dashboardData.attitudeStats.labels[0]} <i className="fas fa-circle text-danger"></i>
                  {dashboardData.attitudeStats.labels[1]} <i className="fas fa-circle text-warning"></i>
                 {dashboardData.attitudeStats.labels[2]}
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Refreshed 3 minutes ago
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Gift Ranking</Card.Title>
                <p className="card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartActivity">
                  <ChartistGraph
                    data={{
                      labels: dashboardData.giftRanking.labels,
                      series: dashboardData.giftRanking.series,
                    }}
                    type="Bar"
                    options={{
                      seriesBarDistance: 10,
                      axisX: {
                        showGrid: false,
                      },
                      height: "245px",
                      horizontalBars: true
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
                  Gift amount 
                  
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Refreshed 3 minutes
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
          <Card className="card-tasks">
            <Card.Header>
              <Card.Title as="h4">Tasks</Card.Title>
              <p className="card-category">Todo in this livestream</p>
            </Card.Header>
            <Card.Body>
              <div className="table-full-width">
                <Table>
                  <tbody>
                    {dashboardData.taskList.map((task, index) => (
                      <tr key={index}>
                        <td>
                          <Form.Check className="mb-1 pl-0">
                            <Form.Check.Label>
                              <Form.Check.Input defaultValue="" type="checkbox"></Form.Check.Input>
                              <span className="form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>{task}</td>
                        <td className="td-actions text-right">
                          <OverlayTrigger overlay={<Tooltip id={`tooltip-edit-${index}`}>Edit Task..</Tooltip>}>
                            <Button className="btn-simple btn-link p-1" type="button" variant="info">
                              <i className="fas fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger overlay={<Tooltip id={`tooltip-remove-${index}`}>Remove..</Tooltip>}>
                            <Button className="btn-simple btn-link p-1" type="button" variant="danger">
                              <i className="fas fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer>
              <hr />
              <div className="stats">
                <i className="now-ui-icons loader_refresh spin"></i>
                Updated 3 minutes ago
              </div>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
