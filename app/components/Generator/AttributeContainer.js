import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// presenter
import Attribute from "./Attribute"
// contianer for the <Query Attribute> controls
class AttributeContainer extends React.Component {
    // component constructor
    constructor(){
        super();
        // bind the function to the <this>
        this.handleChange = this.handleChange.bind(this);
        // initialize the <state>
        this.state = { 
            selectedAttribute: "",
            inputType: "",
            inputClass: "",
            value: "Attribute"
        };
    }  
    // this runs right before the <Attribute> is rendered
    componentWillMount() {
        this.setState({            
            selectedAttribute: this.props.attributeValues[0].value,
            inputType: "text",
            inputClass: "inp-text"
        });
    }
    // changes handler for some user interactions - click, content changes
    handleChange(e, idControl) { 
        this.handleAttributeChange(e);                
        this.setState({value: e.target.value});
    }
    // handle attribute control changes
    handleAttributeChange(e) {
        let selectedValue = e.target.value
        let type = selectedValue.substr(4, selectedValue.length);
        let inpType, inpClass = "";
        switch(type) {
            case "STRING":
                inpType = "text";
                inpClass = "inp-text";
                break;
            case "NUMBER":
                inpType = "number";
                inpClass = "inp-number";
                break;
            case "DATE":
                inpType = "date";
                inpClass = "inp-date";
                break;
            case "BOOLEAN":
                inpType = "dd-yn";
                inpClass = "inp-yn";
                break;
            case "ENUM":
                inpType = "dd-enum";
                inpClass = "inp-enum";
                break;
        }        
        this.props.setAttribute(e.target.value, inpType, inpClass);
    }    
    // rendering the component
    render() {        
        return (
            <Attribute 
                handleChange={this.handleChange}
                attributeValues={this.props.attributeValues}
                value={this.state.value}
            />
        );
    }
}
// component proptypes
AttributeContainer.propTypes = {
    selAttribute: React.PropTypes.string.isRequired,
    setAttribute: React.PropTypes.func.isRequired,
    attributeValues: React.PropTypes.array.isRequired
}
export default AttributeContainer;