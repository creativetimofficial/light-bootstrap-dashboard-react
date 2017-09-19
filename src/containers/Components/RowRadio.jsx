import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Radio from 'elements/CustomRadio/CustomRadio';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

const codeExample = `<Radio
    number="3"
    option="1"
    name="hey"
    isChecked={true}
    label="Checked"
/>
<Radio
    number="4"
    option="2"
    name="hey"
    isChecked={false}
    label="Unchecked"
/>`;

class RowCheckbox extends Component {
    render() {
        return (
            <div className="tim-row" id="radio-row">
                <h2>RadioButtons</h2>
                <legend></legend>
                <p>
                    To use the custom radiobuttons controls you need to import the custom made
                    component:
                </p>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {`import Radio from 'elements/CustomRadio/CustomRadio';`}
                </SyntaxHighlighter>
                <div>
                    <Radio
                        number="3"
                        option="1"
                        name="hey"
                        isChecked={true}
                        label="Checked"
                    />
                    <Radio
                        number="4"
                        option="2"
                        name="hey"
                        isChecked={false}
                        label="Unchecked"
                    />
                </div>

                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeExample}
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
                            <td>This is the unique id of each checkbox. You need to set this for checkboxes to work properly.</td>
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
                            <td>string</td>
                            <td>null</td>
                            <td>
                                Use this flag to add text to the checkbox.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>option</code>
                            </td>
                            <td>string</td>
                            <td>null</td>
                            <td>
                                Use this flag to add obption of the radio.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <code>name</code>
                            </td>
                            <td>string</td>
                            <td>null</td>
                            <td>
                                Use this flag to add the name of the radio group.
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <p>
                    Beside these props you can also reffer to{' '}
                    <a
                        href="https://react-bootstrap.github.io/components.html#forms-props-radio"
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
