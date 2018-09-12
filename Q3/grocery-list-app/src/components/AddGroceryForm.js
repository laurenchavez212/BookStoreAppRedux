import React, { Component } from 'react'

class AddGroceryForm extends Component {
  state = {
    newGrocery: ''
  }

  handleChange = event => {
    this.setState({
      newGrocery: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addGroceryFunc(this.state.newGrocery)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>New Grocery: <input type="text" value={this.state.newGrocery}
        onChange={this.handleChange}/></p>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default AddGroceryForm
