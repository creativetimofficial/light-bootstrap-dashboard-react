import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';


class TableList extends Component {

    render() {
        const thArray = ["ID","Name","Salary","Country","City"];
        const tdArray = [
            [ "1" , "Dakota Rice" , "$36,738" , "Niger" , "Oud-Turnhout" ] ,
            [ "2" , "Minerva Hooper" , "$23,789" , "Curaçao" , "Sinaai-Waas" ] ,
            [ "3" , "Sage Rodriguez" , "$56,142" , "Netherlands" , "Baileux" ] ,
            [ "4" , "Philip Chaney" , "$38,735" , "Korea, South" , "Overland Park" ] ,
            [ "5" , "Doris Greene" , "$63,542" , "Malawi" , "Feldkirchen in Kärnten" ] ,
            [ "6" , "Mason Porter" , "$78,615" , "Chile" , "Gloucester" ]
        ];
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Card
                                title="Striped Table with Hover"
                                category="Here is a subtitle for this table"
                                contentClass="table-responsive table-full-width"
                                content={
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
                                }
                            />
                        </div>


                        <div className="col-md-12">
                            <Card
                                cardClass="card-plain"
                                title="Striped Table with Hover"
                                category="Here is a subtitle for this table"
                                contentClass="table-responsive table-full-width"
                                content={
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
                                }
                            />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default TableList;
