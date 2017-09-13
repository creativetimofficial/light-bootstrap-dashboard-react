import React, { Component } from 'react';
import {Affix} from 'react-overlays';

class Sidebar extends Component {

    render() {
        return (
            <Affix>
            <ul className="nav nav-pills nav-stacked">
                <li>
                    <a href="#buttons-row">Buttons</a>
                </li>
                <li>
                    <a href="#checkbox-row">Checkbox</a>
                </li>
                <li>
                    <a href="#inputs-row">Inputs</a>
                </li>
                <li>
                    <a href="#dropdown-row">Dropdown</a>
                </li>
                <li>
                    <a href="#navbar-row">Navigation</a>
                </li>
                <li>
                    <a href="#tables-row">Tables</a>
                </li>
                <li>
                    <a href="#tooltip-row">Tooltips</a>
                </li>
                <li>
                    <a href="#icons-row">Icons</a>
                </li>
                <li>
                    <a href="#notification-row">Notifications</a>
                </li>
                <li>
                    <a href="#charts-row">Charts</a>
                </li>
                <li>
                    <a href="#card-row">Card/User-Card</a>
                </li>
                <li>
                    <a href="#maps-row">Maps</a>
                </li>
            </ul>
        </Affix>
        );
    }
}

export default Sidebar;
