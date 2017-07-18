import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// reusable component
import MultiSelectControl from "../MultiSelectControl";
// presentation for generator compoennt
const Combinator = (props) => {     
    return (        
        <MultiSelectControl 
            containerClass="combinator-cont"
            idControl="dd-combinator"
            dataValues={props.combinatorValues}
            handleChange={props.handleChange}
        />
    );
}
// component <proptypes>
Combinator.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    combinatorValues: React.PropTypes.array.isRequired
}
export default Combinator;