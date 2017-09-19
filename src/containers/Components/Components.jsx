import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import Sidebar from './Sidebar.jsx';
import RowButtons from './RowButtons.jsx';
import RowCheckbox from './RowCheckbox.jsx';
import RowInputs from './RowInputs.jsx';
import RowDropdown from './RowDropdown.jsx';
import RowNavigation from './RowNavigation.jsx';
import RowTable from './RowTable.jsx';
import RowTooltip from './RowTooltip.jsx';
import RowIcons from './RowIcons.jsx';
import RowNotifications from './RowNotifications.jsx';
import RowCharts from './RowCharts.jsx';
import RowCard from './RowCard.jsx';
import RowMap from './RowMap.jsx';
import RowGettingStarted from './RowGettingStarted.jsx';
import RowLicense from './RowLicense.jsx';
import RowRadio from './RowRadio.jsx';


import imagine from './assets/img/full-image-1.jpg';
import reactLogo from './assets/img/reactlogo.png';
const headerBackground = {
    backgroundImage: 'url(' + imagine + ')'
};


class Components extends Component {
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll(){
        const windowsScrollTop  = window.pageYOffset;
        var navbar = ReactDOM.findDOMNode(this.refs.navbarColorOnScroll);
        var title = ReactDOM.findDOMNode(this.refs.navbarTitle);
        if(windowsScrollTop > 381){
            navbar.classList.remove("navbar-transparent");
            title.classList.remove("hidden");
        } else {
            navbar.classList.add("navbar-transparent");
            title.classList.add("hidden");
        }
    }
    componentDidMount() {
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 2) {
                const hash = hashParts.slice(-1)[0];
                document.querySelector(`#${hash}`).scrollIntoView();
                const windowsScrollTop  = window.pageYOffset;
                if(windowsScrollTop > 381){
                    window.scrollTo(0,windowsScrollTop-100);
                }
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
        window.addEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <div className="components">
                <div className="header-wrapper">
                	<nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll" ref="navbarColorOnScroll">
                		<div className="container">
                			<div className="navbar-header">
                				<button id="menu-toggle" type="button" className="navbar-toggle">
                					<span className="sr-only">Toggle navigation</span>
                					<span className="icon-bar bar1"></span>
                					<span className="icon-bar bar2"></span>
                					<span className="icon-bar bar3"></span>
                				</button>
                				<a href="http://www.creative-tim.com" target="_blank" rel="noopener noreferrer">
                					<div className="logo-container">
                						<div className="logo">
                							<img src="assets/img/new_logo.png" alt="Creative Tim Logo" />
                						</div>
                						<div className="brand">
                							Creative Tim
                						</div>
                					</div>
                				</a>
                			</div>

                			<div className="collapse navbar-collapse text-center">
                				<ul className="nav navbar-nav navbar-center">
                					<li>
                						<div className="navbar-title hidden text-center" ref="navbarTitle">
                							<h4>
                								<div className="image-container">
                									<img src={reactLogo} alt="React Logo" />
                								</div>
                								LBD React Free
                							</h4>
                						</div>
                					</li>
                				</ul>
                				<ul  className="nav navbar-nav navbar-right">
                					<li>
                						<a href="https://github.com/creativetimofficial/#" target="_blank" rel="noopener noreferrer" className="btn btn-simple btn-default">
                							<p>Report issue</p>
                						</a>
                					</li>
                					<li>
                						<a href="https://github.com/creativetimofficial/" target="_blank" rel="noopener noreferrer" className="btn btn-default btn-simple">
                							<i className="fa fa-github"></i> <p>Contribute</p>
                						</a>
                					</li>
                				</ul>

                			</div>
                		</div>
                	</nav>

                	<div className="header" style={headerBackground}>
                		<div className="filter"></div>
                		<div className="title-container text-center">
                			<img src={reactLogo} alt="React Logo" />
                			<h1>Light Bootstrap Dashboard React</h1>
                			<h3>Elements description</h3>
                		</div>
                	</div>
                </div>
                <div className="main">
                    <div className="section">
            			<div className="container">
            				<div className="row">
                                <Grid fluid style={{marginBottom:"50px"}}>
                                    <Row>
                                        <Col md={2}>
                                            <Sidebar />
                                        </Col>
                                        <Col md={8} offset={1}>
                                            <RowLicense />
                                            <RowGettingStarted />
                                            <RowButtons />
                                            <RowCheckbox />
                                            <RowRadio />
                                            <RowInputs />
                                            <RowDropdown />
                                            <RowNavigation />
                                            <RowTable />
                                            <RowTooltip />
                                            <RowIcons />
                                            <RowNotifications />
                                            <RowCharts />
                                            <RowCard />
                                            <RowMap />
                                        </Col>
                                    </Row>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Components;
