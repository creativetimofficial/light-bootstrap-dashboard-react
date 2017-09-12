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

class Components extends Component {

    render() {
        return (
            <Grid fluid style={{marginBottom:"50px"}}>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={8} offset={1}>
                        <RowButtons />
                        <RowCheckbox />
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
        );
    }
}

export default Components;
