import React, { Component } from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap';

function FieldGroup({ label, ...props }) {
    return (
        <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

export class FormInputs extends Component{
    render(){
        var row = [];
        for(var i = 0; i < this.props.ncols.length ; i++){
            row.push(
                <div key={i} className={this.props.ncols[i]}>
                    <FieldGroup
                        {...this.props.proprieties[i]}
                    />
                </div>
            );
        }
        return (
            <div className="row">
                {row}
            </div>
        );
    }
}

export default FormInputs;
