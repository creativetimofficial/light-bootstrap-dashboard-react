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
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

const codeImport = `import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';`;
const codeExampleTooltips = `const edit = (<Tooltip id="edit_tooltip">Edit Task</Tooltip>);
const remove = (<Tooltip id="remove_tooltip">Remove</Tooltip>);`;
const codeExample = `<OverlayTrigger placement="top" overlay={edit}>
    <Button
        variant="info"
        type="button"
        size="xs"
    >
        <i className="fa fa-edit"></i>
    </Button>
</OverlayTrigger>

<OverlayTrigger placement="top" overlay={remove}>
    <Button
        variant="danger"
        type="button"
        size="xs"
    >
        <i className="fa fa-times"></i>
    </Button>
</OverlayTrigger>`;
class TooltipSection extends Component {
  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    return (
      <div className="tim-container">
        <div className="tim-row">
          <h2>Tooltips</h2>
          <legend />
          <p>
            You will see the usage of these components in the <code>Table</code>{" "}
            section.
          </p>
          <h4>Imports</h4>
          <p>For this component you'll need the following imports:</p>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeImport}
          </SyntaxHighlighter>
          <h4>Example</h4>
          <OverlayTrigger placement="top" overlay={edit}>
            <Button variant="info" simple type="button" size="xs">
              <i className="fa fa-edit" />
            </Button>
          </OverlayTrigger>

          <OverlayTrigger placement="top" overlay={remove}>
            <Button variant="danger" simple type="button" size="xs">
              <i className="fa fa-times" />
            </Button>
          </OverlayTrigger>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeExample}
          </SyntaxHighlighter>
          <p>
            And the definition of the <code>Tooltip</code>s:
          </p>
          <SyntaxHighlighter language="jsx" style={prism}>
            {codeExampleTooltips}
          </SyntaxHighlighter>
        </div>
      </div>
    );
  }
}

export default TooltipSection;
