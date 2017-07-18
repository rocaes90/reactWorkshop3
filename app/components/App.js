import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
// data for the app
import AppData from "../data/data.json";
// components
import Header from "./Header";
import CombinatorContainer from "./Generator/CombinatorContainer";
import AttributeContainer from "./Generator/AttributeContainer";
import OperatorContainer from "./Generator/OperatorContainer";
import UserParameterContainer from "./Generator/UserParameterContainer";
import EntityContainer from "./Generator/EntityContainer";
// father component
class App extends React.Component {    
    // component constructor
    constructor() {
        super();
        // initializtion and bind of functions
        this.setEntity = this.setEntity.bind(this);
        this.setCombinator = this.setCombinator.bind(this);
        this.setAttribute = this.setAttribute.bind(this);
        this.setOperator = this.setOperator.bind(this);
        this.setUserParameter = this.setUserParameter.bind(this);        
        this.setAttributesByEntity = this.setAttributesByEntity.bind(this);
        this.setArray = this.setArray.bind(this);
        this.addQuery = this.addQuery.bind(this);
        this.removeQuery = this.removeQuery.bind(this);
        this.restoreUI = this.restoreUI.bind(this);   
        this.submitJSON = this.submitJSON.bind(this);
        // initialize state
        this.state = {
            appdata: {},
            // selected values in the components
            selEntity: "",
            selCombinator: "",
            selAttribute: "",
            selOperator: "",
            selUserParameter: "",
            // style for userParameter component
            inpType: "",
            inpClass: "",
            // lists for components
            combinatorValues: [],
            attributeValuesByEntity: [],
            operatorValues: [],
            enumValues: [], 
            // list of questions
            listOfQueries: []
        }
    }
    // this runs right before the <app> is rendered
    componentWillMount() {              
        this.setAttributesByEntity("instrument", AppData.attribute);        
        this.setState({
            appdata: AppData,
            selEntity: AppData.entity["0"].id,
            selCombinator: AppData.combinator["0"],
            selAttribute: "Attribute",
            selOperator: "Operator",
            combinatorValues: this.setArray(AppData.combinator),
            operatorValues: this.setOperators(AppData.operator),
            enumValues: this.setArray(AppData.enum)
        });        
    }
    // this runs right after the <app> is rendered
    componentDidMount() {
       
    }
    // set the [attributes] according with the selected entity 
    setAttributesByEntity(selEntity, attributeData) {
        let attrByEntity = undefined;
        switch(selEntity) {
            case "instrument":
                attrByEntity = attributeData[0].instrument;
                break;
            case "organization":               
                attrByEntity = attributeData[1].organization;
                break;
            case "case":                
                attrByEntity = attributeData[2].case;
                break;
        }     
        let formatedArray = attrByEntity.map( attr => ({key: attr, value: attr}));
        this.setState({
            attributeValuesByEntity: formatedArray,
            selEntity: selEntity
        });
    }    
    // set an array in the correct format - { key - value }
    setArray(array) {
        var newArray = array.map( data => ({key: data, value: data}));
        return newArray;        
    }  
    // set operators array in the correct format - { key - value }
    setOperators(pObj) {
        let operatorArray = [];
        for(var element in pObj){
            operatorArray.push({key: element, value: pObj[element]})
        }
        return operatorArray;        
    }
    // set the [selected entity]
    setEntity(entityKey) {  
        this.setAttributesByEntity(entityKey, this.state.appdata.attribute); 
    }
    // set the selected combinator
    setCombinator(combinator) {
        this.setState({
            selCombinator: combinator
        });
    }
    // set the selected attribute
    setAttribute(attribute, inpType, inpClass) {
        this.setState({
            selAttribute: attribute,
            inpType: inpType,
            inpClass: inpClass
        });
    }
    // set the selected operator
    setOperator(operator) {
        this.setState({
            selOperator: operator
        });
    }
    // set the selected user parameter
    setUserParameter(userparameter) {
        this.setState({
            selUserParameter: userparameter
        });
    }
    // add query to the list of queries 
    addQuery(parameter) {        
        let listOfQueries = this.state.listOfQueries; 
        let query = "";
        let objQuery = {};        

        if(listOfQueries.length > 0) { query += " " + this.state.selCombinator; }
        query += " " + this.state.selAttribute + " " + this.state.selOperator + " " + this.state.selUserParameter;       
        listOfQueries.push(query);

        this.setState({listOfQueries});
    }
    // remove the query selected
    removeQuery(question, e) { 
        let listOfQueries = this.state.listOfQueries;
        let indexToDelete = listOfQueries.indexOf(question)

        if (indexToDelete > -1){ listOfQueries.splice(indexToDelete, 1); }
        this.setState({listOfQueries});
    }
    // restore ui to the initial values 
    restoreUI() {
        this.setState({
            selEntity: AppData.entity["0"].id,
            selCombinator: AppData.combinator["0"],
            selAttribute: "Attribute",
            selOperator: "Operator"
        });    
    }
    // submit json file with questions
    submitJSON() {
        let allQueries = this.state.listOfQueries;
        console.log(JSON.stringify(allQueries));
    }
    // render app
    render() {
        return(
            <div className="app-cont">
                <Header title="FILTERS" />
                <EntityContainer 
                    removeQuery={this.removeQuery}
                    dataValues={this.state.appdata.entity}
                    listOfQueries={this.state.listOfQueries}
                    setEntity={this.setEntity}
                />                
                <div className="generator-cont">
                    <CombinatorContainer 
                        listOfQueries={this.state.listOfQueries}
                        setCombinator={this.setCombinator}
                        combinatorValues={this.state.combinatorValues}
                    />
                    <AttributeContainer 
                        selAttribute={this.state.selAttribute}
                        setAttribute={this.setAttribute}
                        attributeValues={this.state.attributeValuesByEntity}
                    /> 
                    <OperatorContainer 
                        selAttribute={this.state.selAttribute}
                        setOperator={this.setOperator}
                        operatorValues={this.state.operatorValues}
                    /> 
                    <UserParameterContainer   
                        setUserParameter={this.setUserParameter}
                        addQuery={this.addQuery}  
                        restoreUI={this.restoreUI}  
                        enumValues={this.state.enumValues}
                        selCombinator={this.state.selCombinator}
                        selAttribute={this.state.selAttribute}
                        selOperator={this.state.selOperator}
                        selUserParameter={this.state.selUserParameter}
                        inpType={this.state.inpType}
                        inpClass={this.state.inpClass}
                    /> 
                </div>
                <button className="btn btn-send" onClick={this.submitJSON}>GENERATE FILE >></button>
                <p className="btn-leyend">**Generate a output in the Browser Console</p>
            </div>
        );
    }
}
export default App;