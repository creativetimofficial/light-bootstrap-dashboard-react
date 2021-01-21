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
import { Table, Button } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeColors = `<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>`;

const codeSizes = `<Button variant="primary" size="lg">Large</Button>
<Button variant="primary">Normal</Button>
<Button variant="primary" size="sm">Small</Button>`;

const codeStyles = `<Button variant="primary">Default</Button>
<Button variant="primary" className="btn-fill">
  Fill
</Button>
<Button variant="primary" block>
  Block
</Button>`;

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
          {`import { Button } from 'react-bootstrap';`}
        </SyntaxHighlighter>
        <h4>Colors</h4>
        <p>
          We worked over the original Bootstrap classes, choosing a different,
          slightly intenser color pallete:
        </p>
        <p>
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="info">Info</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeColors}
        </SyntaxHighlighter>
        <h4>Sizes</h4>
        <p>Buttons come in all needed sizes:</p>
        <p>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="primary">Normal</Button>
          <Button variant="primary" size="sm">
            Small
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
          like buttons. Let{"'"}s see some examples:
        </p>
        <p>
          <Button variant="primary">Default</Button>
          <Button variant="primary" className="btn-fill">
            Fill
          </Button>
          <Button variant="primary" block>
            Block
          </Button>
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeStyles}
        </SyntaxHighlighter>
        <h4>Props</h4>
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
