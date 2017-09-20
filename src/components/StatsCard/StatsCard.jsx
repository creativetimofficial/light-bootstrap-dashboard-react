import React, { Component } from 'react';


export class StatsCard extends Component{
    render(){
        return (
            <div className="card card-stats">
                <div className="content">
                    <div className="row">
                        <div className="col-xs-5">
                            <div className="icon-big text-center icon-warning">
                                {this.props.bigIcon}
                            </div>
                        </div>
                        <div className="col-xs-7">
                            <div className="numbers">
                                <p>{this.props.statsText}</p>
                                {this.props.statsValue}
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <hr />
                        <div className="stats">
                            {this.props.statsIcon}{" "}{this.props.statsIconText}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatsCard;
