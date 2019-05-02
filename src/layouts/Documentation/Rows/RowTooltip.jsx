import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import Button from "components/CustomButton/CustomButton.jsx";

const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;

const codeEdit = `const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);`;
const codeRemove = `const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);`;
const codeExmaple = `<OverlayTrigger placement="top" overlay={edit}>
    <Button
        bsStyle="info"
        simple
        type="button"
        bsSize="xs"
    >
        <i className="fa fa-edit"></i>
    </Button>
</OverlayTrigger>

<OverlayTrigger placement="top" overlay={remove}>
    <Button
        bsStyle="danger"
        simple
        type="button"
        bsSize="xs"
    >
        <i className="fa fa-times"></i>
    </Button>
</OverlayTrigger>`;

class RowTooltip extends Component {
  render() {
    return (
      <div id="tooltip-row" className="tim-row">
        <h2>Tooltip</h2>
        <legend />
        <p>
          To use this component you need to import it from react-bootstrap like
          this:
        </p>
        <SyntaxHighlighter language="jsx" style={prism}>
          {`import {Tooltip,OverlayTrigger} from 'react-bootstrap';`}
        </SyntaxHighlighter>

        <h4>Example code</h4>
        <OverlayTrigger placement="top" overlay={edit}>
          <Button bsStyle="info" simple type="button" bsSize="xs">
            <i className="fa fa-edit" />
          </Button>
        </OverlayTrigger>

        <OverlayTrigger placement="top" overlay={remove}>
          <Button bsStyle="danger" simple type="button" bsSize="xs">
            <i className="fa fa-times" />
          </Button>
        </OverlayTrigger>
        <br />
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeEdit}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeRemove}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExmaple}
        </SyntaxHighlighter>
        <h4>Details</h4>
        <p>
          In this examples we have used <code>Button</code> elements for the
          tooltips to appear over. You can use different elements. For more
          information about tooltips and how to use them, please refer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/tooltips/"
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

export default RowTooltip;
