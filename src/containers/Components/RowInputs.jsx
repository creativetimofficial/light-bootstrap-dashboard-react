import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import {FormInputs} from 'components/FormInputs/FormInputs.jsx';


const codeExample = `<FormInputs
    ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
    proprieties = {[
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
      <div id="inputs-row">
        <h2>Inputs</h2>
        <p>
            For a better way to render form inputs we've created a special component <code>FormInputs</code>.
            We use this component to create a whole row of inputs.
            To use this component you need to import it:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import {FormInputs} from 'components/FormInputs/FormInputs.jsx'`}
        </SyntaxHighlighter>
        <h4>Example code</h4>
        <FormInputs
            ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
            proprieties = {[
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
        />

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeExample}
        </SyntaxHighlighter>

        <p>
            In this example we've created 3 inputs occupying a 5 medium column,
             a 3 medium column and a 4 medium column, each having it's own set of proprieties.
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
              <td>Use this flag to set how much each input will occupy in a row by using Bootstrap column classes.
                  If this is not set, then nothing will be rendered.</td>
            </tr>
            <tr>
              <td>
                <code>proprieties</code>
              </td>
              <td>Array of properties</td>
              <td>null</td>
              <td>
                  Use this flag to set each input's properties. A full set of input properties can be found at{' '}
                  <a
                    href="https://react-bootstrap.github.io/components.html#forms-controls-props"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    react-bootstrap documentation
                </a>.
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="alert alert-warning">
            <strong>Warning!</strong> The number of elements in <code>proprieties</code> has to be equal
            to the number of elements in <code>ncols</code> for this component to work properly.
        </div>
        <p>
            You can also use normal react-bootstrap elements for creating inputs. For this please refer to{' '}
            <a
              href="https://react-bootstrap.github.io/components.html#forms"
              target="_blank"
              rel="noopener noreferrer"
          >
              react-bootstrap documentation
          </a>.
        </p>
      </div>
    );
  }
}

export default RowInputs;
