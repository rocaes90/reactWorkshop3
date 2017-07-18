import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// reusable component
import UserParameter from "./UserParameter"
// input component for the final value in the query
class UserParameterContainer extends React.Component {
    // component constructor
    constructor(){
        super();

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addQuery = this.addQuery.bind(this);
        this.validateShowButtons = this.validateShowButtons.bind(this);
        this.restoreUI = this.restoreUI.bind(this);

        this.state = { 
            inputValue: "",
            showButtons: false
        };
    }  
    // this runs right before the <input> is rendered
    componentWillMount() {
    }       
    // this runs right after the <input> is rendered
	componentWillUpdate(nextProps, nextState) {
	}	 
    // handle changes in the control content
    handleInputChange(e) {       
        this.props.setUserParameter(e.target.value);
        this.setState({inputValue: e.target.value});
        this.validateShowButtons(e.target.value);
    }	 
    // handle changes in the control content
    handleChange(e) {       
        this.props.setUserParameter(e.target.value);
        this.setState({inputValue: e.target.value});
        this.validateShowButtons(e.target.value);
    }
    // manage query 
    addQuery() {
        this.props.addQuery(this.state.inputValue);
    }
    // manage query 
    restoreUI() {
        this.props.restoreUI();
    }    
    // validate selected values to show buttons to add/remove query
    validateShowButtons(userParameter) {
        if(this.props.selAttribute.length > 0 &&
            this.props.selOperator.length > 0 &&
            this.props.selOperator != "Operator" &&
            userParameter.length > 0 &&
            this.props.selCombinator.length > 0)
            {
                this.setState({showButtons: true});
            }else {
                this.setState({showButtons: false});
            }
    }
    // rendering the component
    render() {
        
        if(this.props.selAttribute != "Attribute"){
            return(
                <UserParameter 
                    showButtons={this.state.showButtons}
                    inputClass={this.props.inpClass}
                    inputType={this.props.inpType}
                    handleChange={this.handleChange}
                    handleInputChange={this.handleInputChange}
                    addQuery={this.addQuery}
                    restoreUI={this.restoreUI}
                    enumValues={this.props.enumValues}
                />
            );
        } else {
            return null;
        }
    }
}
// component PropTypes
UserParameterContainer.propTypes = {
    setUserParameter: React.PropTypes.func.isRequired,
    addQuery: React.PropTypes.func.isRequired,
    restoreUI: React.PropTypes.func.isRequired,
    enumValues: React.PropTypes.array.isRequired,
    selCombinator: React.PropTypes.string.isRequired,
    selOperator: React.PropTypes.string.isRequired,
    selUserParameter: React.PropTypes.string.isRequired,
    inpType: React.PropTypes.string,
    inpClass: React.PropTypes.string.isRequired,
}
export default UserParameterContainer;