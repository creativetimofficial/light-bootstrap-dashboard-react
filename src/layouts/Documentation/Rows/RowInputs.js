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
import { Table, Alert } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import { Form, InputGroup } from "react-bootstrap";


const code = `import React, { Component } from "react";

import { Form, InputGroup } from "react-bootstrap";

function Example() {
  return (
    <>
      <Form.Group>
        <Form.Control type="text" placeholder="Input"></Form.Control>
      </Form.Group>
      <Form.Group className="has-success">
        <Form.Control type="text" placeholder="With success"></Form.Control>
      </Form.Group>
      <Form.Group className="has-error has-feedback">
        <Form.Control type="text" placeholder="With error"></Form.Control>
      </Form.Group>
      <InputGroup>
        <Form.Control type="text" placeholder="With addon"></Form.Control>
          <InputGroup.Append>
           <InputGroup.Text><i class="fa fa-group"></i></InputGroup.Text>
         </InputGroup.Append>
      </InputGroup>
    </>
  );
}

export default Example;`;
function InputsSection() {
  return (
    <div className="tim-container">
      <div className="tim-row">
        <h2>Inputs</h2>
        <legend />
        <p>
          We restyled the Bootstrap input to give it a more flat, minimal look.
          You can use the classic look, different colors and states or input
          groups.
        </p>
        <h4>Example Code</h4>
        <Form.Group>
          <Form.Control type="text" placeholder="Input"></Form.Control>
        </Form.Group>
        <Form.Group className="has-success">
          <Form.Control type="text" placeholder="With success"></Form.Control>
        </Form.Group>
        <Form.Group className="has-error has-feedback">
          <Form.Control type="text" placeholder="With error"></Form.Control>
        </Form.Group>
        <InputGroup>
          <Form.Control type="text" placeholder="With addon"></Form.Control>
          <InputGroup.Append>
            <InputGroup.Text>
              <i class="fa fa-group"></i>
            </InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <br />
          <SyntaxHighlighter language="jsx" style={prism}>
            {code}
          </SyntaxHighlighter>
        <h4>Props</h4>
        <p>
          For this please refer to{" "}
          <a
            href="https://react-bootstrap.netlify.app/components/forms/"
            target="_blank"
          >
            react-bootstrap documentation
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default InputsSection;
