import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import {thArray, tdArray} from 'variables/Variables.jsx';

const codeExamplethArray = `const thArray = ["ID","Name","Salary","Country","City"];`;
const codeExampletdArray = `const tdArray = [
    [ "1" , "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
    [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
    [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
    [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
    [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
    [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
];`;

const codeExampleStriped = `<Table striped hover>
    <thead>
        <tr>
            {
                thArray.map((prop, key) => {
                    return (
                    <th  key={key}>{prop}</th>
                    );
                })
            }
        </tr>
    </thead>
    <tbody>
        {
            tdArray.map((prop,key) => {
                return (
                    <tr key={key}>{
                        prop.map((prop,key)=> {
                            return (
                                <td  key={key}>{prop}</td>
                            );
                        })
                    }</tr>
                )
            })
        }
    </tbody>
</Table>`;

const codeExample = `<Table hover>
    <thead>
        <tr>
            {
                thArray.map((prop, key) => {
                    return (
                    <th  key={key}>{prop}</th>
                    );
                })
            }
        </tr>
    </thead>
    <tbody>
        {
            tdArray.map((prop,key) => {
                return (
                    <tr key={key}>{
                        prop.map((prop,key)=> {
                            return (
                                <td  key={key}>{prop}</td>
                            );
                        })
                    }</tr>
                )
            })
        }
    </tbody>
</Table>`;


class RowTable extends Component {
    render() {
        return (
            <div id="tables-row">
                <h2>Tables</h2>
                <h4>Example code</h4>
                <Table striped hover>
                    <thead>
                        <tr>
                            {
                                thArray.map((prop, key) => {
                                    return (
                                        <th  key={key}>{prop}</th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tdArray.map((prop,key) => {
                                return (
                                    <tr key={key}>{
                                        prop.map((prop,key)=> {
                                            return (
                                                <td  key={key}>{prop}</td>
                                            );
                                        })
                                    }</tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeExampleStriped}
                </SyntaxHighlighter>
                <Table hover>
                    <thead>
                        <tr>
                            {
                                thArray.map((prop, key) => {
                                    return (
                                        <th  key={key}>{prop}</th>
                                    );
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tdArray.map((prop,key) => {
                                return (
                                    <tr key={key}>{
                                        prop.map((prop,key)=> {
                                            return (
                                                <td  key={key}>{prop}</td>
                                            );
                                        })
                                    }</tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <SyntaxHighlighter language="html" style={monokaiSublime}>
                    {codeExample}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {codeExamplethArray}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                    {codeExampletdArray}
                </SyntaxHighlighter>
                <h4>Details</h4>
                <p>
                    For tables we've used the map function to make the data in them more dynamically. They
                    are simple <code>Table</code> elements from react-bootstrap. For more information on them
                    you can refer to{' '}
                    <a
                        href="https://react-bootstrap.github.io/components.html#tables"
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

export default RowTable;
