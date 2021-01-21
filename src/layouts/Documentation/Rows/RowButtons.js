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

import Button from "components/CustomButton/CustomButton";

const codeColors = `<Button>Default</Button>
<Button bsStyle="primary">Primary</Button>
<Button bsStyle="info">Info</Button>
<Button bsStyle="success">Success</Button>
<Button bsStyle="warning">Warning</Button>
<Button bsStyle="danger">Danger</Button>`;

const codeSizes = `<Button bsStyle="primary" bsSize="lg">Large</Button>
<Button bsStyle="primary">Normal</Button>
<Button bsStyle="primary" bsSize="sm">Small</Button>
<Button bsStyle="primary" bsSize="xs">Extra Small</Button>`;

const codeStyles = `<Button bsStyle="primary">Default</Button>
<Button bsStyle="primary" fill>Fill</Button>
<Button bsStyle="primary" round>Rounded</Button>
<Button bsStyle="primary" simple>Simple</Button>
<Button bsStyle="primary" pullRight>Pull Right</Button>
<Button bsStyle="primary" block>Block</Button>`;

class RowButtons extends Component {
  render() {
    return (
      <div id="buttons-row" className="tim-row">
        <h2>Buttons</h2>
        <legend />
        <p>
          To use the custom buttons you need to import the custom made
          component:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import Button from 'components/CustomButton/CustomButton';`}
        </SyntaxHighlighter>
        <h4>Colors</h4>
        <p>
          We worked over the original Bootstrap classes, choosing a different,
          slightly intenser color pallete:
        </p>
        <p>
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColors}
        </SyntaxHighlighter>
        <h4>Sizes</h4>
        <p>Buttons come in all needed sizes:</p>
        <p>
          <Button bsStyle="primary" bsSize="lg">
            Large
          </Button>
          <Button bsStyle="primary">Normal</Button>
          <Button bsStyle="primary" bsSize="sm">
            Small
          </Button>
          <Button bsStyle="primary" bsSize="xs">
            Extra Small
          </Button>
        </p>

        <SyntaxHighlighter language="jsx" style={prism}>
          {codeSizes}
        </SyntaxHighlighter>

        <h4>Styles</h4>
        <p>
          We added extra classes that can help you better customise the look.
          You can use regular buttons, filled buttons, right-pulled buttons,
          buttons that span over the entire given space or plain simple link
          like buttons. Let's see some examples:
        </p>
        <p>
          <Button bsStyle="primary">Default</Button>
          <Button bsStyle="primary" fill>
            Fill
          </Button>
          <Button bsStyle="primary" round>
            Rounded
          </Button>
          <Button bsStyle="primary" simple>
            Simple
          </Button>
          <Button bsStyle="primary" pullRight>
            Pull Right
          </Button>
          <Button bsStyle="primary" block>
            Block
          </Button>
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStyles}
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
                <code>fill</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this flag to create filled buttons.</td>
            </tr>
            <tr>
              <td>
                <code>simple</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this flag to create simple / link buttons.</td>
            </tr>
            <tr>
              <td>
                <code>block</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Use this flag to create a button that spans the whole given
                space.{" "}
              </td>
            </tr>
            <tr>
              <td>
                <code>pullRight</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this to pull right the button.</td>
            </tr>
            <tr>
              <td>
                <code>round</code>
              </td>
              <td>boolean</td>
              <td>false</td>
              <td>Use this to make the buttons corners rounded.</td>
            </tr>
          </tbody>
        </Table>
        <p>
          Beside these props you can also reffer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/buttons/#buttons-props"
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

export default RowButtons;
