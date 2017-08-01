import React, { Component } from 'react';


export class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="card">
                <div className="header">
                    <h4 className="title">{this.props.title}</h4>
                    <p className="category">{this.props.category}</p>
                </div>
                <div className="content">
                    <div id={this.props.id} className={this.props.classes}>
                        {this.props.children[0]}
                    </div>
                    <div className="footer">
                            {this.props.children[1]}
                        <hr />
                        <div className="stats">
                            <i className={this.props.statsIcon}></i> {this.props.stats}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
