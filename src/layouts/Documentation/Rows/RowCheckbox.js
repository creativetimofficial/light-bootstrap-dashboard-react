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
import { Form } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeColors = `<div>
  <Form.Check className="mb-1 pl-0">
    <Form.Check.Label>
      <Form.Check.Input
        defaultChecked
        type="checkbox"
      ></Form.Check.Input>
      <span className="form-check-sign"></span>
      Checked
    </Form.Check.Label>
  </Form.Check>
  <Form.Check className="mb-1 pl-0">
    <Form.Check.Label>
      <Form.Check.Input type="checkbox"></Form.Check.Input>
      <span className="form-check-sign"></span>
      Unchecked
    </Form.Check.Label>
  </Form.Check>
</div>`;

class RowCheckbox extends Component {
  render() {
    return (
      <div className="tim-row" id="checkbox-row">
        <h2>Checkboxes</h2>
        <legend />
        <p>
          To use the custom checkbox controls you need to import the custom made
          component:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Form from 'react-bootstrap';`}
        </SyntaxHighlighter>
        <div>
          <Form.Check className="mb-1 pl-0">
            <Form.Check.Label>
              <Form.Check.Input
                defaultChecked
                type="checkbox"
              ></Form.Check.Input>
              <span className="form-check-sign"></span>
              Checked
            </Form.Check.Label>
          </Form.Check>
          <Form.Check className="mb-1 pl-0">
            <Form.Check.Label>
              <Form.Check.Input type="checkbox"></Form.Check.Input>
              <span className="form-check-sign"></span>
              Unchecked
            </Form.Check.Label>
          </Form.Check>
        </div>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColors}
        </SyntaxHighlighter>

        <h4>Props</h4>
        <p>
          Beside these props you can also reffer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/forms/#forms-props-checkbox"
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

export default RowCheckbox;
