import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Sidebar from './Sidebar.jsx';
import RowButtons from './RowButtons.jsx';
import RowCheckbox from './RowCheckbox.jsx';

class Components extends Component {

    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={8} offset={1}>
                        <RowButtons />
                        <RowCheckbox />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Components;
