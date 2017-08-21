import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

import Card from 'components/Card/Card.jsx';

class UpgradeToPro extends Component {

    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
    					<div className="col-md-8 col-md-offset-2">
                            <Card
                                title="Light Bootstrap Dashboard PRO"
                                category="Are you looking for more components? Please check our Premium Version of Light Bootstrap Dashboard."
                                contentClass="table-responsive table-full-width table-upgrade"
                                content={
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                            	<th className="text-center">Free</th>
                                            	<th className="text-center">PRO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            	<td>Components</td>
                                            	<td>16</td>
                                            	<td>115+</td>
                                            </tr>
                                            <tr>
                                            	<td>Plugins</td>
                                            	<td>4</td>
                                            	<td>14+</td>
                                            </tr>
                                            <tr>
                                            	<td>Example Pages</td>
                                            	<td>4</td>
                                            	<td>22+</td>
                                            </tr>
                                            <tr>
                                            	<td>Documentation</td>
                                            	<td><i className="fa fa-times text-danger"></i></td>
                                            	<td><i className="fa fa-check text-success"></i></td>
                                            </tr>
                                            <tr>
                                            	<td>SASS Files</td>
    											<td><i className="fa fa-times text-danger"></i></td>
                                            	<td><i className="fa fa-check text-success"></i></td>
                                            </tr>
                                            <tr>
                                            	<td>Login/Register/Lock Pages</td>
    											<td><i className="fa fa-times text-danger"></i></td>
                                            	<td><i className="fa fa-check text-success"></i></td>
                                            </tr>
    										<tr>
                                            	<td>Premium Support</td>
    											<td><i className="fa fa-times text-danger"></i></td>
                                            	<td><i className="fa fa-check text-success"></i></td>
                                            </tr>
    										<tr>
                                            	<td></td>
    											<td>Free</td>
                                            	<td>Just $39</td>
                                            </tr>
    										<tr>
    											<td></td>
    											<td>
    												<a href="#" className="btn btn-round btn-fill btn-default disabled">Current Version</a>
    											</td>
    											<td>
    												<a target="_blank" href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro/?ref=lbdupgrade" className="btn btn-round btn-fill btn-info">Upgrade to PRO</a>
    											</td>
    										</tr>
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

export default UpgradeToPro;
