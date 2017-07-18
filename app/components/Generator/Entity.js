import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import CSSTransitionGroup from "react-addons-css-transition-group";
// reusable component
import MultiSelectControl from "../MultiSelectControl";
// entity component presentation
class Entity extends React.Component {               
    constructor() {
        super();
    }
    render() {  
        const removeimage = require('../../img/remove.png');
        return (
            <div className="entity-cont">
                <MultiSelectControl
                    containerClass="entity-list"
                    idControl="dd-entity"
                    dataValues={this.props.dataValues} 
                    handleChange={this.props.handleChange}
                />
                <CSSTransitionGroup
                    component="ul"
                    className="query-list"
                    transitionName="query-list"
                    transitionEnterTimeout={250}
                    transitionLeaveTimeout={0}
                >                     
                    { 
                        Object
                            .keys(this.props.listOfQueries)
                            .map(key =>                   
                                <li key={key} className="query">
                                    
                                        <strong>{this.props.listOfQueries[key]}</strong>                       
                                    <button className="btn" onClick={this.props.removeQuery.bind(this, this.props.listOfQueries[key])}><img src={removeimage} alt="remove" /></button>
                                </li>)
                    }
                </CSSTransitionGroup>
            </div>
        );
    }
}
// component <proptypes>
Entity.propTypes = {
    removeQuery: React.PropTypes.func.isRequired,
    dataValues: React.PropTypes.array.isRequired,
    listOfQueries: React.PropTypes.array.isRequired,
    handleChange: React.PropTypes.func.isRequired
}
export default Entity;