import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from './components/Button'

class App extends Component {
  constructor() {
    super()

    // initial state
    this.state = {
      activateTab: "add",
      items: []
    }

    // bindings
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  // methods
  handleButtonClick(tab) {
    console.log('#1 activateTab :', tab)  
    this.setState({ activateTab: tab });
  }
  
  render() {
    console.log("render App activateTab : ",this.state.activateTab);
    return (
      <div className="container my-5 me-4 d-flex" role="group">
        <Button name="Add" handleClick={this.handleButtonClick}/>
        <Button name="List" handleClick={this.handleButtonClick}/>
        <Button name="Pay" handleClick={this.handleButtonClick}/>
      </div>
    );
  }
}

export default App;