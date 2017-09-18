import React, { Component } from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';


const codeIconForIconExample = `const icon = (
    <div>
        <i className="fa fa-globe"></i>
        <b className="caret"></b>
        <span className="notification">5</span>
    </div>
);
`;

const codeIconExample = `<NavDropdown eventKey={1} title={icon} id="basic-nav-dropdown">
    <MenuItem eventKey={1.1}>Notification 1</MenuItem>
    <MenuItem eventKey={1.2}>Notification 2</MenuItem>
    <MenuItem eventKey={1.3}>Notification 3</MenuItem>
    <MenuItem eventKey={1.4}>Notification 4</MenuItem>
    <MenuItem eventKey={1.5}>Another notifications</MenuItem>
</NavDropdown>
`;

const codeTextExample = `<NavDropdown eventKey={1} title="This is a dropdown" id="basic-nav-dropdown">
    <MenuItem eventKey={1.1}>Notification 1</MenuItem>
    <MenuItem eventKey={1.2}>Notification 2</MenuItem>
    <MenuItem eventKey={1.3}>Notification 3</MenuItem>
    <MenuItem eventKey={1.4}>Notification 4</MenuItem>
    <MenuItem eventKey={1.5}>Another notifications</MenuItem>
</NavDropdown>`;

const icon = (
    <div>
        <i className="fa fa-globe"></i>
        <b className="caret"></b>
        <span className="notification">5</span>
    </div>
);


class RowDropdown extends Component {
    render() {
        return (
            <div id="dropdown-row" className="tim-row">
                <h2>Dropdowns</h2>
                <legend></legend>
                <h4>Example code of Dropdown with Icon</h4>
                <NavDropdown eventKey={1} title={icon} id="basic-nav-dropdown">
                    <MenuItem eventKey={1.1}>Notification 1</MenuItem>
                    <MenuItem eventKey={1.2}>Notification 2</MenuItem>
                    <MenuItem eventKey={1.3}>Notification 3</MenuItem>
                    <MenuItem eventKey={1.4}>Notification 4</MenuItem>
                    <MenuItem eventKey={1.5}>Another notifications</MenuItem>
                </NavDropdown>

                <br />

                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeIconForIconExample}
                </SyntaxHighlighter>

                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeIconExample}
                </SyntaxHighlighter>

                <h4>Example code of Dropdown with text</h4>
                <NavDropdown eventKey={1} title="This is a dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={1.1}>Notification 1</MenuItem>
                    <MenuItem eventKey={1.2}>Notification 2</MenuItem>
                    <MenuItem eventKey={1.3}>Notification 3</MenuItem>
                    <MenuItem eventKey={1.4}>Notification 4</MenuItem>
                    <MenuItem eventKey={1.5}>Another notifications</MenuItem>
                </NavDropdown>
                <br />
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeTextExample}
                </SyntaxHighlighter>


                <h4>Details</h4>

                <p>
                    For more details please refer to{' '}
                    <a
                        href="https://react-bootstrap.github.io/components.html#navs-dropdown"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                            react-bootstrap documentation
                        </a>.
                    </p>

                    <div className="alert alert-warning">
                        <strong>Warning!</strong> These type of dropdowns are used within <code>Navbar</code> components from react-bootstrap.
                        <br />For usage of normal dropdowns please refer to{' '}
                        <a
                            href="https://react-bootstrap.github.io/components.html#btn-dropdowns"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                react-bootstrap documentation
                            </a>.
                        </div>
                    </div>
                );
            }
        }

        export default RowDropdown;
