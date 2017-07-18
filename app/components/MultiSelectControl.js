import React from "react";
import PropTypes from 'prop-types';
// reusable - multi select control in the UI
class MultiSelectControl extends React.Component {
    constructor(){
        super();
    }
    render() {
        // validation for a selected value
        if(this.props.selected == undefined) {
            return(
                <div className={this.props.containerClass}>
                    <select 
                        className="multi-sel-ctrl" 
                        id={this.props.idControl}
                        onChange={(e) => this.props.handleChange(e, this.props.idControl)}
                        value={this.props.value}>
                            {this.props.dataValues.map(data => (
                                <option key={data.key} value={data.value}>{data.value}</option>
                            ))}
                    </select> 
                </div>
            );
        } else {
            return(
                <div className={this.props.containerClass}>
                    <select                         
                        value={this.props.value}
                        className="multi-sel-ctrl" 
                        id={this.props.idControl}
                        onChange={(e) => this.props.handleChange(e, this.props.idControl)}>
                            <option key={this.props.selected}>{this.props.selected}</option>
                            {this.props.dataValues.map(data => (
                                <option key={data.key}>{data.value}</option>
                            ))}
                    </select> 
                </div>
            );
        }
    }
} 
// component PropTypes
MultiSelectControl.propTypes = {
    selected: React.PropTypes.string,
    containerClass: React.PropTypes.string.isRequired,
    idControl: React.PropTypes.string,
    dataValues: React.PropTypes.array.isRequired,
    handleChange: React.PropTypes.func,
    value: React.PropTypes.string
}
export default MultiSelectControl;