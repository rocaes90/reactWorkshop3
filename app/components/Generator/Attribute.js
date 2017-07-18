import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// reusable component
import MultiSelectControl from "../MultiSelectControl";
// presentation for attribute compoennt
const Attribute = (props) => {     
    return (
        <MultiSelectControl 
            selected="Attribute"
            containerClass="attribute-cont"
            idControl="dd-Attribute"
            dataValues={props.attributeValues}
            handleChange={props.handleChange}
            value={props.value}
        />
    );
}
// component proptypes
Attribute.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    attributeValues: React.PropTypes.array.isRequired,
    value: React.PropTypes.string.isRequired
}
export default Attribute;
