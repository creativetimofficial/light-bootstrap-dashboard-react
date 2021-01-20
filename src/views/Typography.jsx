import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function Typography() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Light Bootstrap Table Heading</Card.Title>
                <p className=" card-category">
                  Created using Montserrat Font Family
                </p>
              </Card.Header>
              <Card.Body>
                <div className=" typography-line">
                  <h1>
                    <span>Header 1</span>
                    The Life of LB Dashboard
                  </h1>
                </div>
                <div className=" typography-line">
                  <h2>
                    <span>Header 2</span>
                    The Life of Light Bootstrap Dashboard
                  </h2>
                </div>
                <div className=" typography-line">
                  <h3>
                    <span>Header 3</span>
                    The Life of Light Bootstrap Dashboard
                  </h3>
                </div>
                <div className=" typography-line">
                  <h4>
                    <span>Header 4</span>
                    The Life of Light Bootstrap Dashboard
                  </h4>
                </div>
                <div className=" typography-line">
                  <h5>
                    <span>Header 5</span>
                    The Life of Light Bootstrap Dashboard
                  </h5>
                </div>
                <div className=" typography-line">
                  <h6>
                    <span>Header 6</span>
                    The Life of Light Bootstrap Dashboard
                  </h6>
                </div>
                <div className=" typography-line">
                  <p>
                    <span>Paragraph</span>I will be the leader of a company that
                    ends up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus. I think
                    that’s a responsibility that I have, to push possibilities,
                    to show people, this is the level that things could be at.
                  </p>
                </div>
                <div className=" typography-line">
                  <span>Quote</span>
                  <blockquote>
                    <p className=" blockquote blockquote-primary">
                      "I will be the leader of a company that ends up being
                      worth billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at."{" "}
                      <br></br>
                      <br></br>
                      <small>- Noaa</small>
                    </p>
                  </blockquote>
                </div>
                <div className=" typography-line">
                  <span>Muted Text</span>
                  <p className=" text-muted">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className=" typography-line">
                  <span>Primary Text</span>
                  <p className=" text-primary">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className=" typography-line">
                  <span>Info Text</span>
                  <p className=" text-info">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className=" typography-line">
                  <span>Success Text</span>
                  <p className=" text-success">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className=" typography-line">
                  <span>Warning Text</span>
                  <p className=" text-warning">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className=" typography-line">
                  <span>Danger Text</span>
                  <p className=" text-danger">
                    I will be the leader of a company that ends up being worth
                    billions of dollars, because I got the answers...
                  </p>
                </div>
                <div className=" typography-line">
                  <h2>
                    <span>Small Tag</span>
                    Header with small subtitle <br></br>
                    <small>Use "small" tag for the headers</small>
                  </h2>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Typography;
