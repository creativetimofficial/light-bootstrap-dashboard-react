import React, { Component } from 'react';
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

import 'documentation.css';

class Components extends Component {
    componentDidMount() {
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const scrollToAnchor = () => {
            const hashParts = window.location.hash.split('#');
            if (hashParts.length > 2) {
                const hash = hashParts.slice(-1)[0];
                document.querySelector(`#${hash}`).scrollIntoView();
            }
        };
        scrollToAnchor();
        window.onhashchange = scrollToAnchor;
    }
    render() {
        return (
            <div className="header-wrapper">
            	<nav className="navbar navbar-default navbar-transparent navbar-fixed-top navbar-color-on-scroll" role="navigation">
            		<div className="container">
            			<div className="navbar-header">
            				<button id="menu-toggle" type="button" className="navbar-toggle">
            					<span className="sr-only">Toggle navigation</span>
            					<span className="icon-bar bar1"></span>
            					<span className="icon-bar bar2"></span>
            					<span className="icon-bar bar3"></span>
            				</button>
            				<a href="http://www.creative-tim.com" target="_blank">
            					<div className="logo-container">
            						<div className="logo">
            							<img src="../src/assets/img/new_logo.png" alt="Creative Tim Logo" />
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
            						<div className="navbar-title hidden text-center">
            							<h4>
            								<div className="image-container">
            									<img src="../src/assets/img/angular-red.png" alt="Angular Logo" />
            								</div>
            								LBD Angular CLI Free
            							</h4>
            						</div>
            					</li>
            				</ul>
            				<ul  className="nav navbar-nav navbar-right">
            					<li>
            						<a href="https://github.com/creativetimofficial/light-bootstrap-dashboard-angular-cli/issues" target="_blank" className="btn btn-simple btn-default">
            							<p>Report issue</p>
            						</a>
            					</li>
            					<li>
            						<a href="https://github.com/creativetimofficial/light-bootstrap-dashboard-angular-cli" target="_blank" className="btn btn-default btn-simple">
            							<i className="fa fa-github"></i> <p>Contribute</p>
            						</a>
            					</li>
            				</ul>

            			</div>
            		</div>
            	</nav>

            	<div className="header" style={{backgroundImage: "url('../src/assets/img/full-screen-image-3.jpg')"}}>
            		<div className="filter"></div>
            		<div className="title-container text-center">
            			<img src="../src/assets/img/angular-red.png" alt="Angular Logo" />
            			<h1>Light Bootstrap Dashboard Angular CLI</h1>
            			<h3>Elements description</h3>
            		</div>
            	</div>
            </div>
            // {/* <Grid fluid style={{marginBottom:"50px"}}>
            //     <Row>
            //         <Col md={2}>
            //             <Sidebar />
            //         </Col>
            //         <Col md={8} offset={1}>
            //             <RowButtons />
            //             <RowCheckbox />
            //             <RowInputs />
            //             <RowDropdown />
            //             <RowNavigation />
            //             <RowTable />
            //             <RowTooltip />
            //             <RowIcons />
            //             <RowNotifications />
            //             <RowCharts />
            //             <RowCard />
            //             <RowMap />
            //         </Col>
            //     </Row>
            // </Grid> */}
        );
    }
}

export default Components;
