import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// presenter for entity component
import Entity from "./Entity";
// container for the <Entity> component
class EntityContainer extends React.Component {
    // component constructor
    constructor() {
        super();
        // initializtion and bind of functions
        this.handleChange = this.handleChange.bind(this);
        // state definition
        this.state = { 
            entityData: []
        };        
    }
    // this runs right before the <app> is rendered
    componentWillMount() {
        var formatedArray = this.props.dataValues.map( data => ({key: data.id, value: data.label}));
        this.setState({
            entityData: formatedArray
        });
    }
    // changes handler for changes in the entity selection 
    handleChange(e, idControl) {
        var selectedEntityKey = this.state.entityData.filter(function(entity){
            return entity.value == e.target.value
        })[0].key
        this.props.setEntity(selectedEntityKey);
    }
    // rendering the component 
    render() {
        return (
            <Entity 
                removeQuery={this.props.removeQuery}
                dataValues={this.state.entityData}
                listOfQueries={this.props.listOfQueries}
                handleChange={this.handleChange}/> 
        );
    } 
}
// component PropTypes
EntityContainer.propTypes = {
    removeQuery: React.PropTypes.func.isRequired,
    dataValues: React.PropTypes.array.isRequired,
    listOfQueries: React.PropTypes.array.isRequired,
    setEntity: React.PropTypes.func.isRequired
}
export default EntityContainer;