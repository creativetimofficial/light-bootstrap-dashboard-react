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
                  Effective thematic analysis in live stream that can help you
                  identify, analyze, and report patterns in your data.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Subjects</th>
                      <th className="border-0">Main Takeaway</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>TAIL Framework</td>
                      <td>
                        TAIL integrates lightweight adapter modules into large
                        pretrained decision-making models. The key idea is to
                        keep the original pretrained model mostly frozen and
                        only train these adapter modules on the new task data.
                        This approach significantly reduces the number of
                        trainable parameters compared to fine-tuning the entire
                        model.
                      </td>
                    </tr>
                    <tr>
                      <td>Adapters</td>
                      <td>
                        Adapters are small neural modules that are inserted
                        between the layers of a pretrained model. They are
                        trained on the new task data while the rest of the model
                        remains frozen. This allows the model to adapt to new
                        tasks without forgetting the original tasks it was
                        trained on.
                      </td>
                    </tr>
                    <tr>
                      <td>Performance</td>
                      <td>
                        Adapters achieve competitive performance compared to
                        fine-tuning, even when using a fraction of the
                        parameters. They also outperform other parameter-sharing
                        methods like weight tying and feature extraction.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Content Analysis</Card.Title>
                <p className="card-category">Pain Points</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">Subjects</th>
                      <th className="border-0">Analysis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Content Analysis</td>
                      <td>
                        Content analysis is a research method used to identify
                        patterns in data. It involves systematically coding and
                        categorizing data to identify themes and patterns that
                        can help answer research questions.
                      </td>
                    </tr>
                    <tr>
                      <td>Qualitative vs. Quantitative</td>
                      <td>
                        Content analysis can be qualitative or quantitative.
                        Qualitative content analysis focuses on the quality of
                        the data, while quantitative content analysis focuses on
                        the quantity of the data.
                      </td>
                    </tr>
                    <tr>
                      <td>Steps</td>
                      <td>
                        The steps involved in content analysis include
                        formulating research questions, selecting a sample,
                        coding the data, and analyzing the results. It is
                        important to establish inter-coder reliability to ensure
                        the validity of the results.
                      </td>
                    </tr>
                    <tr>
                      <td>Applications</td>
                      <td>
                        Content analysis is used in a wide range of fields,
                        including marketing, media studies, and social sciences.
                        It can help researchers identify trends, patterns, and
                        relationships in data that can inform decision-making
                        and policy development.
                      </td>
                    </tr>
                    <tr>
                      <td>Challenges</td>
                      <td>
                        Content analysis can be time-consuming and labor-intensive,
                        especially when working with large datasets. It is
                        important to carefully plan and execute the analysis to
                        ensure the validity and reliability of the results.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TableList;