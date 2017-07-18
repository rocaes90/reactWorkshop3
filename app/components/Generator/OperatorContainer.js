import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// presenter
import Operator from "./Operator"
// contianer for the <Query Operator> controls
class OperatorContainer extends React.Component {
    // component constructor
    constructor(){
        super();
        // bind functions to <this>
        this.handleChange = this.handleChange.bind(this);
        // initialize the <state>
        this.state = { 
            selectedOperator: ""
        };
    }  
    // this runs right before the <Operator> is rendered
    componentWillMount() {
        this.setState({            
            selectedOperator: this.props.operatorValues[0].value
        });
    }   
    // changes handler for some user interactions - click, content changes
    handleChange(e) {         
        this.props.setOperator(e.target.value);
    }
    // rendering the component
    render() {
        if(this.props.selAttribute != "Attribute"){
            return (
                <Operator 
                    handleChange={this.handleChange}
                    operatorValues={this.props.operatorValues}
                />
            );
        } else {
            return null;
        }
    }
}
// component PropTypes
OperatorContainer.propTypes = {
    selAttribute: React.PropTypes.string.isRequired,
    setOperator: React.PropTypes.func.isRequired,
    operatorValues: React.PropTypes.array.isRequired
}
export default OperatorContainer;