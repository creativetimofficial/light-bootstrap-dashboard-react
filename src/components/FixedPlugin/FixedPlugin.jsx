import React, { Component } from 'react';
import Toggle from 'react-toggle';
import { NavLink } from 'react-router-dom';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import GitHubButton from 'react-github-button';


import imagine1 from 'assets/img/sidebar-1.jpg';
import imagine2 from 'assets/img/sidebar-3.jpg';
import imagine3 from 'assets/img/sidebar-4.jpg';
import imagine4 from 'assets/img/sidebar-5.jpg';

const {
  FacebookShareButton,
  TwitterShareButton
} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class FixedPlugin extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes: "dropdown show-dropdown open",
            is_checked: true,
            bgImage: this.props.bgImage,
            switched: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.onChangeClick = this.onChangeClick.bind(this);
    }
    handleClick(){
        this.state["classes"] === "dropdown" ? this.setState({classes: "dropdown show-dropdown open"}) : this.setState({classes: "dropdown"});
    }
    onChangeClick(){
        this.setState({is_checked: !this.state.is_checked});
        this.props.handleHasImage(!this.state.is_checked);
    }
    render(){
        return (
            <div className="fixed-plugin">
                <div className={this.state["classes"]}>
                        <div onClick={this.handleClick}>
                            <i className="fa fa-cog fa-2x"></i>
                        </div>
                    <ul className="dropdown-menu">
                        <li className="header-title">Sidebar Style</li>
                        <li className="adjustments-line">
                            <p className="pull-left">Background Image</p>
                            <div className="pull-right">
                                <Toggle
                                    defaultChecked={this.state.is_checked}
                                    onChange={this.onChangeClick} />
                            </div>
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
                        <li className={this.state["bgImage"] === imagine1 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine1});this.props.handleImageClick(imagine1)} }>
                                <img src={imagine1} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine2 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine2});this.props.handleImageClick(imagine2)} }>
                                <img src={imagine2} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine3 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine3});this.props.handleImageClick(imagine3)} }>
                                <img src={imagine3} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine4 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine4});this.props.handleImageClick(imagine4)} }>
                                <img src={imagine4} alt="..."/>
                            </a>
                        </li>

                        <li className="button-container">
                            <div className="">
                                {
                                  // eslint-disable-next-line
                                }<a href="https://www.creative-tim.com/product/light-bootstrap-dashboard-react" target="_blank" className="btn btn-info btn-block btn-fill">Download, it's free!</a>
                            </div>
                        </li>
                        <li className="button-container">
                            <NavLink to={'/documentation'} className="btn btn-fill btn-warning" activeClassName="active">
                                Documentation
                            </NavLink>
                        </li>

            			<li className="header-title" id="sharrreTitle">Thank you for sharing!</li>

                        <li className="button-container">
                            <FacebookShareButton url="http://lbd-react.creative-tim.com"><FacebookIcon size={32} round={true}/></FacebookShareButton>
                            <TwitterShareButton url="http://lbd-react.creative-tim.com" title="Light Bootstrap Dashboard React - Free Bootstrap Admin Template" hashtags={["react","bootstrap"]} via="creativetim"><TwitterIcon size={32} round={true}/></TwitterShareButton>
                        </li>
                        <li className="button-container">
                            {/* <div classNam */}
                                <GitHubButton type="stargazers"
                                    namespace="creativetimofficial" repo="light-bootstrap-dashboard-react"
                                />
                                <GitHubButton type="forks"
                                    namespace="creativetimofficial" repo="light-bootstrap-dashboard-react"
                                />
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default FixedPlugin;
