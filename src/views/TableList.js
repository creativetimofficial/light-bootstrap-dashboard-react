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
} from "react-bootstrap";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Key Takeaways</Card.Title>
                <p className="card-category">
                Effective thematic analysis in live stream that can help you identify, analyze, and report patterns in your data.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Content Analysis</Card.Title>
                <p className="card-category">
                  Pain Points
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;
