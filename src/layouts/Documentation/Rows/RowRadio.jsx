import React, { Component } from "react";
import { Table } from "react-bootstrap";
import Radio from "components/CustomRadio/CustomRadio";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeExample = `<Radio
    number="3"
    option="1"
    name="radio"
    onChange={this.handleRadio}
    checked={this.state.radio === "1"}
    label="Checked"
/>
<Radio
    number="4"
    option="2"
    name="radio"
    onChange={this.handleRadio}
    checked={this.state.radio === "2"}
    label="Unchecked"
/>`;
const codeExampleDependecies = `constructor(props) {
    super(props);
    this.state = {
        radio: "1"
    };
}

handleRadio = event => {
    const target = event.target;
    this.setState({
        [target.name]: target.value
    });
};`;

class RowCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio: "1"
    };
  }

  handleRadio = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    });
  };
  render() {
    return (
      <div className="tim-row" id="radio-row">
        <h2>RadioButtons</h2>
        <legend />
        <p>
          To use the custom radiobuttons controls you need to import the custom
          made component:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Radio from 'components/CustomRadio/CustomRadio';`}
        </SyntaxHighlighter>
        <div>
          <Radio
            number="3"
            option="1"
            name="radio"
            onChange={this.handleRadio}
            checked={this.state.radio === "1"}
            label="Checked"
          />
          <Radio
            number="4"
            option="2"
            name="radio"
            onChange={this.handleRadio}
            checked={this.state.radio === "2"}
            label="Unchecked"
          />
        </div>

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleDependecies}
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
                <code>option</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to add obption of the radio.</td>
            </tr>
            <tr>
              <td>
                <code>name</code>
              </td>
              <td>string</td>
              <td>null</td>
              <td>Use this flag to add the name of the radio group.</td>
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
            <tr>
              <td>
                <code>onChange</code>
              </td>
              <td>function</td>
              <td>null</td>
              <td>This is the prop that changes the default checked radio.</td>
            </tr>
            <tr>
              <td>
                <code>checked</code>
              </td>
              <td>boolean</td>
              <td>true</td>
              <td>
                This is the prop to make one radio checked by default. If you
                set this porp you need to set onChange prop too.
              </td>
            </tr>
          </tbody>
        </Table>
        <p>
          Beside these props you can also reffer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/forms/#forms-props-radio"
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
