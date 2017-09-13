import React, { Component } from 'react';

import imagine1 from 'img/sidebar-1.jpg';
import imagine2 from 'img/sidebar-3.jpg';
import imagine3 from 'img/sidebar-4.jpg';
import imagine4 from 'img/sidebar-5.jpg';

class FixedPlugin extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes: "dropdown",
            is_checked: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.onChangeClick = this.onChangeClick.bind(this);
    }
    handleClick(){
        this.state["classes"] === "dropdown" ? this.setState({classes: "dropdown show-dropdown open"}) : this.setState({classes: "dropdown"});
    }
    onChangeClick(){
        this.setState({is_checked: !this.state["is_checked"]});
        this.props.handleHasImage(this.state["is_checked"]);
    }
    render(){
        return (
            <div className="fixed-plugin">
                <div className={this.state["classes"]} onClick={this.handleClick}>
                        <i className="fa fa-cog fa-2x"> </i>
                    <ul className="dropdown-menu">
                        <li className="header-title">Sidebar Style</li>
                        <li className="adjustments-line">
                            <a  className="switch-trigger">
                                <p>Background Image</p>
                                <div className="switch"
                                    data-on-label="ON"
                                    data-off-label="OFF">
                                    <input
                                        type="checkbox"
                                        checked={this.state.is_checked}
                                        onChange={this.onChangeClick}
                                    />
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="adjustments-line">
                            <a  className="switch-trigger">
                                <p>Filters</p>
                                <div className="pull-right">
                                    <span className={this.props.bgColor === "black" ? "badge filter active":"badge filter"} data-color="black" onClick={() => {this.props.handleColorClick("black")}}></span>
                                    <span className={this.props.bgColor === "azure" ? "badge filter badge-azure active":"badge filter badge-azure"} data-color="azure" onClick={() => {this.props.handleColorClick("azure")}}></span>
                                    <span className={this.props.bgColor === "green" ? "badge filter badge-green active":"badge filter badge-green"} data-color="green" onClick={() => {this.props.handleColorClick("green")}}></span>
                                    <span className={this.props.bgColor === "orange" ? "badge filter badge-orange active":"badge filter badge-orange"} data-color="orange" onClick={() => {this.props.handleColorClick("orange")}}></span>
                                    <span className={this.props.bgColor === "red" ? "badge filter badge-red active":"badge filter badge-red"} data-color="red" onClick={() => {this.props.handleColorClick("red")}}></span>
                                    <span className={this.props.bgColor === "purple" ? "badge filter badge-purple active":"badge filter badge-purple"} data-color="purple" onClick={() => {this.props.handleColorClick("purple")}}></span>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="header-title">Sidebar Images</li>
                        <li className={this.props.bgImage === imagine1 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.props.handleImageClick(imagine1)} }>
                                <img src={imagine1} alt="..."/>
                            </a>
                        </li>
                        <li className={this.props.bgImage === imagine2 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.props.handleImageClick(imagine2)} }>
                                <img src={imagine2} alt="..."/>
                            </a>
                        </li>
                        <li className={this.props.bgImage === imagine3 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.props.handleImageClick(imagine3)} }>
                                <img src={imagine3} alt="..."/>
                            </a>
                        </li>
                        <li className={this.props.bgImage === imagine4 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.props.handleImageClick(imagine4)} }>
                                <img src={imagine4} alt="..."/>
                            </a>
                        </li>

                        <li className="button-container">
                            <div className="">
                                <a href="http://www.creative-tim.com" target="_blank" rel="noopener noreferrer" className="btn btn-info btn-block btn-fill">Download, it's free!</a>
                            </div>
                        </li>

                        {/* <li className="header-title pro-title">Want more components?</li>
                        <li className="button-container">
                            <div className="">
                                <a href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro" target="_blank" className="btn btn-warning btn-block btn-fill">Get The PRO Version!</a>
                            </div>
                        </li> */}

            			<li className="header-title" id="sharrreTitle">Thank you for sharing!</li>

                        <li className="button-container">
            				<button id="twitter" className="btn btn-social btn-twitter btn-round"><i className="fa fa-twitter"></i> &middot; 256</button>
                            <button id="facebook" className="btn btn-social btn-facebook btn-round"><i className="fa fa-facebook-square"> &middot; 426</i></button>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default FixedPlugin;
