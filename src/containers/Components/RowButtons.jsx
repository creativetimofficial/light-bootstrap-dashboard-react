import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import Button from 'elements/CustomButton/CustomButton';


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
<Button bsStyle="primary" simple>Simple</Button>
<Button bsStyle="primary" block>Block</Button>
<Button bsStyle="primary" pullRight>Pull Right</Button>`;

class RowButtons extends Component {
  render() {
    return (
      <div id="buttons-row">
        <h2>Buttons</h2>
        <p>
          To use the custom buttons you need to import the custom made component:
        </p>
        <SyntaxHighlighter language="javascript" style={monokaiSublime}>
          {`import Button from 'elements/CustomButton/CustomButton';`}
        </SyntaxHighlighter>
        <h4>Colors</h4>
        <p>
          We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:
        </p>
        <p>
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
        </p>

        <SyntaxHighlighter language="html" style={monokaiSublime}>
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

        <SyntaxHighlighter language="html" style={monokaiSublime}>
          {codeSizes}
        </SyntaxHighlighter>

        <h4>Styles</h4>
        <p>
          We added extra classes that can help you better customise the look.
          You can use regular buttons, filled buttons or plain simple link like
          buttons. Let's see some examples:
        </p>
        <p>
            <Button bsStyle="primary">Default</Button>
            <Button bsStyle="primary" fill>Fill</Button>
            <Button bsStyle="primary" simple>Simple</Button>
            <Button bsStyle="primary" block>Block</Button>
            <Button bsStyle="primary" pullRight>Pull Right</Button>
        </p>
        <SyntaxHighlighter language="html" style={monokaiSublime}>
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
                Use this flag to create a button that spans the whole given space.
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
          </tbody>
        </Table>
        <p>
          Beside these props you can also reffer to{' '}
          <a
            href="https://react-bootstrap.github.io/components.html#buttons-props"
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

export default RowButtons;
