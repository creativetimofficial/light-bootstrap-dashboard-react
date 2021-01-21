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
import { Table } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/styles/prism";

import { thArray, tdArray } from "variables/Variables.js";

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
      <div id="tables-row" className="tim-row">
        <h2>Tables</h2>
        <legend />
        <h4>Example code</h4>
        <Table striped hover>
          <thead>
            <tr>
              {thArray.map((prop, key) => {
                return <th key={key}>{prop}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tdArray.map((prop, key) => {
              return (
                <tr key={key}>
                  {prop.map((prop, key) => {
                    return <td key={key}>{prop}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampleStriped}
        </SyntaxHighlighter>
        <Table hover>
          <thead>
            <tr>
              {thArray.map((prop, key) => {
                return <th key={key}>{prop}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {tdArray.map((prop, key) => {
              return (
                <tr key={key}>
                  {prop.map((prop, key) => {
                    return <td key={key}>{prop}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExample}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExamplethArray}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="jsx" style={prism}>
          {codeExampletdArray}
        </SyntaxHighlighter>
        <h4>Details</h4>
        <p>
          For tables we've used the map function to make the data in them more
          dynamically. They are simple <code>Table</code> elements from
          react-bootstrap. For more information on them you can refer to{" "}
          <a
            href="https://react-bootstrap.github.io/components/table/"
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

export default RowTable;
