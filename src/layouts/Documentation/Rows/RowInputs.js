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
import { Table } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import { FormInputs } from "components/FormInputs/FormInputs.js";

const codeExample = `<FormInputs
    ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
    properties = {[
        {
            label : "Company (disabled)",
            type : "text",
            bsClass : "form-control",
            placeholder : "Company",
            defaultValue : "Creative Code Inc.",
            disabled : true
        },
        {
            label : "Username",
            type : "text",
            bsClass : "form-control",
            placeholder : "Username",
            defaultValue : "michael23"
        },
        {
            label : "Email address",
            type : "email",
            bsClass : "form-control",
            placeholder : "Email"
        }
    ]}
/>`;

class RowInputs extends Component {
  render() {
    return (
      <div id="inputs-row" className="tim-row">
        <h2>Inputs</h2>
        <legend />
        <p>
          For a better way to render form inputs we've created a special
          component <code>FormInputs</code>. We use this component to create a
          whole row of inputs. To use this component you need to import it:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import {FormInputs} from 'components/FormInputs/FormInputs.js'`}
        </SyntaxHighlighter>
        <h4>Example code</h4>
        <FormInputs
          ncols={["col-md-5", "col-md-3", "col-md-4"]}
          properties={[
            {
              label: "Company (disabled)",
              type: "text",
              bsClass: "form-control",
              placeholder: "Company",
              defaultValue: "Creative Code Inc.",
              disabled: true
            },
            {
              label: "Username",
              type: "text",
              bsClass: "form-control",
              placeholder: "Username",
              defaultValue: "michael23"
            },
            {
              label: "Email address",
              type: "email",
              bsClass: "form-control",
              placeholder: "Email"
            }
          ]}
        />

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>

        <p>
          In this example we've created 3 inputs occupying a 5 medium column, a
          3 medium column and a 4 medium column, each having it's own set of
          properties.
        </p>

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
                <code>ncols</code>
              </td>
              <td>Array of string</td>
              <td>null</td>
              <td>
                Use this flag to set how much each input will occupy in a row by
                using Bootstrap column classes. If this is not set, then nothing
                will be rendered.
              </td>
            </tr>
            <tr>
              <td>
                <code>properties</code>
              </td>
              <td>Array of properties</td>
              <td>null</td>
              <td>
                Use this flag to set each input's properties. A full set of
                input properties can be found at{" "}
                <a
                  href="https://react-bootstrap.github.io/components/forms/#forms-props"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  react-bootstrap documentation
                </a>
                .
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="alert alert-warning">
          <strong>Warning!</strong> The number of elements in{" "}
          <code>properties</code> has to be equal to the number of elements in{" "}
          <code>ncols</code> for this component to work properly.
        </div>
        <p>
          You can also use normal react-bootstrap elements for creating inputs.
          For this please refer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/forms/"
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

export default RowInputs;
