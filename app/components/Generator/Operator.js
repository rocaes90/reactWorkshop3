import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// reusable component
import MultiSelectControl from "../MultiSelectControl";
// presentation for Operator compoennt
const Operator = (props) => {     
    return (
        <MultiSelectControl 
            selected="Operator"
            containerClass="operator-cont"
            idControl="dd-Operator"
            dataValues={props.operatorValues}
            handleChange={props.handleChange}
        />
    );
}
// component proptypes
Operator.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    operatorValues: React.PropTypes.array.isRequired
}
export default Operator;