import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/styles/prism";

const codeColors = `<div>
    <Checkbox
        number="1"
        isChecked={true}
        label="Checked"
    />
    <Checkbox
        number="2"
        isChecked={false}
        label="Unchecked"
    />
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
          {`import Checkbox from 'components/CustomCheckbox/CustomCheckbox';`}
        </SyntaxHighlighter>
        <div>
          <Checkbox number="1" isChecked={true} label="Checked" />
          <Checkbox number="2" isChecked={false} label="Unchecked" />
        </div>

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColors}
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
                <code>number</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>
                This is the unique id of each checkbox. You need to set this for
                checkboxes to work properly.
              </td>
            </tr>
            <tr>
              <td>
                <code>isChecked</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this flag to create a checked / unchecked checkbox.</td>
            </tr>
            <tr>
              <td>
                <code>label</code>
              </td>
              <td>string / node</td>
              <td>null</td>
              <td>
                Use this flag to add text or a node as a label to the checkbox.
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          Beside these props you can also reffer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/forms/#forms-props-checkbox"
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

export default RowCheckbox;
