import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// presenter
import Combinator from "./Combinator"
// contianer for the <Query generator> controls
class CombinatorContainer extends React.Component {
    // component constructor
    constructor(){
        super();
        // bind functions to <this>
        this.handleChange = this.handleChange.bind(this);
        // initialize the state
        this.state = { 
            selectedCombinator: "",
        };
    }  
    // this runs right before the <generator> is rendered
    componentWillMount() {
        this.setState({            
            selectedCombinator: this.props.combinatorValues[0].value
        });
    }          
    // changes handler for some user interactions - click, content changes
    handleChange(e, idControl) { 
         this.props.setCombinator(e.target.value);              
    } 
    // rendering the component
    render() {
        if(this.props.listOfQueries != undefined && this.props.listOfQueries.length > 0) {
            return (
                <Combinator 
                    handleChange={this.handleChange}
                    combinatorValues={this.props.combinatorValues}
                />
            );
        } else {
            return null;
        }        
    }
}
// component <proptypes>
CombinatorContainer.propTypes = {
    listOfQueries: React.PropTypes.array.isRequired,
    setCombinator: React.PropTypes.func.isRequired,
    combinatorValues: React.PropTypes.array.isRequired
}
export default CombinatorContainer;