import React, { Component } from 'react';


import Card from 'components/Card/Card';
import {iconsArray} from 'variables/Variables.jsx';

class Icons extends Component {
    render() {
        return (
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <Card
                                title="202 Awesome Stroke Icons"
                                contentClass="all-icons"
                                category={
                                    <span>
                                        Handcrafted by our friends from <a target="_blank" rel="noopener noreferrer" href="http://themes-pixeden.com/font-demos/7-stroke/index.html">Pixeden</a>
                                    </span>
                                }
                                content={
                                    <div className="row">
                                        {
                                            iconsArray.map((prop,key) => {
                                                return (
                                                    <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6" key={key}>
                                                        <div className="font-icon-detail">
                                                            <i className={prop}></i>
                                                            <input type="text" defaultValue={prop} />
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Icons;
