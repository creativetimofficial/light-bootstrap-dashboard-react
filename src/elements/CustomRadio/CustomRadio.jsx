import React, { Component } from 'react';

class CustomRadio extends Component {
    constructor(props){
        super(props);
            this.state = {
                is_checked: props.isChecked
            };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({is_checked: !this.state.is_checked});
    }
    render() {
        const { isChecked, number, label, option,...rest } = this.props;

        return (
            <div className="radio">
                <input id={number} name={number} onChange={this.handleClick} checked={this.state.is_checked} {...rest} type="radio" value={option} />
                <label htmlFor={number}>
                    {label}
                </label>
            </div>
        );
    }
}

export default CustomRadio;
