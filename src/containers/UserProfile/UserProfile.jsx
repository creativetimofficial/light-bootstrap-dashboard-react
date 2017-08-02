import React, { Component } from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';

class UserProfile extends Component {
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <Card
                                title="Edit Profile"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols = {["col-md-5" , "col-md-3" , "col-md-4"]}
                                            proprieties = {[
                                                {
                                                 label : "Company (disabled)",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Company",
                                                 defaultValue : "Creative Code Inc.",
                                                 disabled : true
                                                },
                                                {
                                                 label : "Username",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Username",
                                                 defaultValue : "michael23"
                                                },
                                                {
                                                 label : "Email address",
                                                 type : "email",
                                                 bsClass : "form-control",
                                                 placeholder : "Email"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-6" , "col-md-6"]}
                                            proprieties = {[
                                                {
                                                 label : "First name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "First name",
                                                 defaultValue : "Mike"
                                                },
                                                {
                                                 label : "Last name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Last name",
                                                 defaultValue : "Andrew"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-12"]}
                                            proprieties = {[
                                                {
                                                    label : "Adress",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Home Adress",
                                                    defaultValue : "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-4","col-md-4","col-md-4"]}
                                            proprieties = {[
                                                {
                                                    label : "City",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "City",
                                                    defaultValue : "Mike"
                                                },
                                                {
                                                    label : "Country",
                                                    type : "text",
                                                    bsClass : "form-control",
                                                    placeholder : "Country",
                                                    defaultValue : "Andrew"
                                                },
                                                {
                                                    label : "Pastal Code",
                                                    type : "number",
                                                    bsClass : "form-control",
                                                    placeholder : "ZIP Code"
                                                }
                                            ]}
                                        />

                                        <div className="row">
                                            <div className="col-md-12">
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>About Me</ControlLabel>
                                                    <FormControl rows="5" componentClass="textarea" bsClass="form-control" placeholder="Here can be your description" defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."/>
                                                </FormGroup>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-info btn-fill pull-right">Update Profile</button>
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </div>
                        <div className="col-md-4">
                            <div className="card card-user">
                                <div className="image">
                                    <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
                                </div>
                                <div className="content">
                                    <div className="author">
                                         <a href="#pablo">
                                        <img className="avatar border-gray" src="assets/img/faces/face-3.jpg" alt="..."/>

                                          <h4 className="title">Mike Andrew<br />
                                             <small>michael24</small>
                                          </h4>
                                        </a>
                                    </div>
                                    <p className="description text-center">
                                        "Lamborghini Mercy
                                        <br />
                                        Your chick she so thirsty
                                        <br />
                                        I'm in that two seat Lambo"
                                    </p>
                                </div>
                                <hr />
                                <div className="text-center">
                                    <button href="#pablo" className="btn btn-simple"><i className="fa fa-facebook-square"></i></button>
                                    <button href="#pablo" className="btn btn-simple"><i className="fa fa-twitter"></i></button>
                                    <button href="#pablo" className="btn btn-simple"><i className="fa fa-google-plus-square"></i></button>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
