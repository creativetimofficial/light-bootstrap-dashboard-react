import React, { Component } from 'react';


export class Card extends Component{
    render(){
        return (
            <div className={"card "+this.props.cardClass}>
                <div className="header">
                    <h4 className="title">{this.props.title}</h4>
                    <p className="category">{this.props.category}</p>
                </div>
                <div className={"content "+this.props.contentClass}>
                    <div id={this.props.id} className={this.props.classes}>
                        {this.props.content}
                    </div>
                    <div className="footer">
                        {this.props.legend}
                        {this.props.stats != null ? <hr />:""}
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
