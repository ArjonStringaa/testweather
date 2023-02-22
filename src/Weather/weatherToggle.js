import React from "react";

export default class App extends React.Component {
    constructor() {  
     super();  
     this.state = {selectValue: ''};  // initial state value
  }  

  // Handles state change
  handleChange = (event) => {
    this.setState({selectValue: event.target.value}, ()=> {alert(`Value: ${this.state.selectValue}`)});
    } 

  render() {
    return (
      <select onChange={this.handleChange}  id="colours">
        <option value="red">Rainy</option>
        <option value="green">Sunny</option>
        <option value="blue">Cloudy</option>
      </select>
    );
  }
}
