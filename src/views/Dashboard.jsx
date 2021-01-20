import React from "react";

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
  Tooltip
} from "react-bootstrap";

function Dashboard() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Email Statistics</Card.Title>
                <p className=" card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className=" ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                ></div>
                <div className=" legend">
                  <i className=" fa fa-circle text-info"></i>
                  Open <i className=" fa fa-circle text-danger"></i>
                  Bounce <i className=" fa fa-circle text-warning"></i>
                  Unsubscribe
                </div>
                <hr></hr>
                <div className=" stats">
                  <i className=" fa fa-clock-o"></i>
                  Campaign sent 2 days ago
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Users Behavior</Card.Title>
                <p className=" card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className=" ct-chart" id="chartHours"></div>
              </Card.Body>
              <Card.Footer>
                <div className=" legend">
                  <i className=" fa fa-circle text-info"></i>
                  Open <i className=" fa fa-circle text-danger"></i>
                  Click <i className=" fa fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className=" stats">
                  <i className=" fa fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">2017 Sales</Card.Title>
                <p className=" card-category">All products including Taxes</p>
              </Card.Header>
              <Card.Body>
                <div className=" ct-chart" id="chartActivity"></div>
              </Card.Body>
              <Card.Footer>
                <div className=" legend">
                  <i className=" fa fa-circle text-info"></i>
                  Tesla Model S <i className=" fa fa-circle text-danger"></i>
                  BMW 5 Series
                </div>
                <hr></hr>
                <div className=" stats">
                  <i className=" fa fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="6">
            <Card className=" card-tasks">
              <Card.Header>
                <Card.Title as="h4">Tasks</Card.Title>
                <p className=" card-category">Backend development</p>
              </Card.Header>
              <Card.Body>
                <div className=" table-full-width">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className=" form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Sign contract for "What are conference organizers
                          afraid of?"
                        </td>
                        <td className=" td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-488980961">
                                Edit Task..
                              </Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className=" fa fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-506045838">Remove..</Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className=" fa fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className=" form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Lines From Great Russian Literature? Or E-mails From
                          My Boss?
                        </td>
                        <td className=" td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-537440761">
                                Edit Task..
                              </Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className=" fa fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-21130535">Remove..</Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className=" fa fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className=" form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Flooded: One year later, assessing what was lost and
                          what was found when a ravaging rain swept through
                          metro Detroit
                        </td>
                        <td className=" td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-577232198">
                                Edit Task..
                              </Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className=" fa fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-773861645">Remove..</Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className=" fa fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultChecked
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className=" form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>
                          Create 4 Invisible User Experiences you Never Knew
                          About
                        </td>
                        <td className=" td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-422471719">
                                Edit Task..
                              </Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className=" fa fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-829164576">Remove..</Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className=" fa fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className=" form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Read "Following makes Medium better"</td>
                        <td className=" td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-160575228">
                                Edit Task..
                              </Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className=" fa fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-922981635">Remove..</Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className=" fa fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Check>
                            <Form.Check.Label>
                              <Form.Check.Input
                                defaultValue=""
                                disabled
                                type="checkbox"
                              ></Form.Check.Input>
                              <span className=" form-check-sign"></span>
                            </Form.Check.Label>
                          </Form.Check>
                        </td>
                        <td>Unfollow 5 enemies from twitter</td>
                        <td className=" td-actions text-right">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-938342127">
                                Edit Task..
                              </Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="info"
                            >
                              <i className=" fa fa-edit"></i>
                            </Button>
                          </OverlayTrigger>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-119603706">Remove..</Tooltip>
                            }
                            placement=""
                            trigger="hover"
                          >
                            <Button
                              className=" btn-simple btn-link"
                              type="button"
                              variant="danger"
                            >
                              <i className=" fa fa-times"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className=" stats">
                  <i className=" now-ui-icons loader_refresh spin"></i>
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
