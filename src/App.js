import React, { Component } from 'react';
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  constructor () {
    super()

    // initial state
    this.state = {
      activateTab: "add",
      items: [],
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
    console.log("render App activateTab : ", this.state.activateTab);
    return ( 
      <>
        <h1>Bakery</h1>
        <div className="container my-5 me-4 d-flex" role="group">
          <Button isSelected={this.state.activateTab === "Add"} name="Add" handleClick={this.handleButtonClick} />
          <Button isSelected={this.state.activateTab === "List"} name="List" handleClick={this.handleButtonClick} />
          <Button isSelected={this.state.activateTab === "Pay"} name="Pay" handleClick={this.handleButtonClick} />
          {/* {isSelected === "Add" && <Add />} */}
        </div>
      </>
    );
  }
}

export default App;