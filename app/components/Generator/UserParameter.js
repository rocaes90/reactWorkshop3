import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// reusable component
import MultiSelectControl from "../MultiSelectControl";
// input component for the final value in the query
class UserParameter extends React.Component {
    constructor() {
        super();
        // declaring global values
        const addimage = require('../../img/add.png');
        const restoreimage = require('../../img/restore.png');
        // initialize the <state>
        this.state = { 
            addimage: addimage,
            restoreimage: restoreimage
        };
        // bind the functions to <this>
        this.renderWithButtons = this.renderWithButtons.bind(this);
    }
    // render with <add button>
    renderWithButtons() {
        const btnadd = <button className="btn" onClick={this.props.addQuery}><img src={this.state.addimage} alt="add" /></button>
        const btnrestore = <button className="btn" onClick={this.props.restoreUI}><img src={this.state.restoreimage} alt="restore" /></button>

        let ynValues = [{key: "yes", value: "yes"},{key: "no", value: "no"}];
        
        switch(this.props.inputType){
            case "dd-enum":
                return (
                    <div className="value-inp">
                        <MultiSelectControl 
                            containerClass="inp-select"
                            dataValues={this.props.enumValues}
                            handleChange={this.props.handleChange}
                        />                        
                        {btnadd}
                        {btnrestore}
                    </div>
                );
            case "dd-yn":
                return (
                    <div className="value-inp">
                        <MultiSelectControl 
                            containerClass="inp-select"
                            dataValues={ynValues}
                            handleChange={this.props.handleChange}
                        />                     
                        {btnadd}
                        {btnrestore}
                    </div>
                );
            default:
                return (
                    <div className="value-inp">
                        <input 
                            className="inp-param"
                            type={this.props.inputType} 
                            placeholder={this.props.inputType}
                            onChange={this.props.handleInputChange}>
                        </input>             
                        {btnadd}
                        {btnrestore}
                    </div>
                );
        }
    }
    // render with out <add button>
    render() {
        let ynValues = [{key: "yes", value: "yes"},{key: "no", value: "no"}];
        
        const btnrestore = <button className="btn" onClick={this.props.restoreUI}><img src={this.state.restoreimage} alt="restore" /></button>

        if(this.props.showButtons || this.props.inputType == "dd-enum" || this.props.inputType == "dd-yn"){
           return this.renderWithButtons();
        } else {            
            return (
                <div className="value-inp">
                    <input 
                        className="inp-param"
                        type={this.props.inputType} 
                        placeholder={this.props.inputType}
                        onChange={this.props.handleInputChange}>
                    </input>                            
                    {btnrestore}
                </div>
            );
        }      
    } 
}
// component PropTypes
UserParameter.propTypes = {
    showButtons: React.PropTypes.bool.isRequired,
    inputClass: React.PropTypes.string,
    inputType: React.PropTypes.string,
    handleChange: React.PropTypes.func,
    handleInputChange: React.PropTypes.func.isRequired,
    addQuery: React.PropTypes.func.isRequired,
    restoreUI: React.PropTypes.func.isRequired,
    enumValues: React.PropTypes.array.isRequired,
}
export default UserParameter;