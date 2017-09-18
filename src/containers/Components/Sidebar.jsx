import React, { Component } from 'react';
import {Affix} from 'react-overlays';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    render() {
        return (
            <Affix offsetTop={400}>
            <ul className="nav nav-pills nav-stacked">
                <li>
                    <Link to='#license-row' className="nav-link">License</Link>
                </li>
                <li>
                    <Link to='#getting-started-row' className="nav-link">Getting started</Link>
                </li>
                <li>
                    <Link to='#buttons-row' className="nav-link">Buttons</Link>
                </li>
                <li>
                    <Link to='#checkbox-row' className="nav-link">Checkbox</Link>
                </li>
                <li>
                    <Link to='#inputs-row' className="nav-link">Inputs</Link>
                </li>
                <li>
                    <Link to='#dropdown-row' className="nav-link">Dropdown</Link>
                </li>
                <li>
                    <Link to='#navbar-row' className="nav-link">Navigation</Link>
                </li>
                <li>
                    <Link to='#tables-row' className="nav-link">Tables</Link>
                </li>
                <li>
                    <Link to='#tooltip-row' className="nav-link">Tooltips</Link>
                </li>
                <li>
                    <Link to='#icons-row' className="nav-link">Icons</Link>
                </li>
                <li>
                    <Link to='#notification-row' className="nav-link">Notifications</Link>
                </li>
                <li>
                    <Link to='#charts-row' className="nav-link">Charts</Link>
                </li>
                <li>
                    <Link to='#card-row' className="nav-link">Card/User-Card</Link>
                </li>
                <li>
                    <Link to='#maps-row' className="nav-link">Maps</Link>
                </li>
            </ul>
        </Affix>
        );
    }
}

export default Sidebar;
