import React from 'react';
import GroceryList from './components/GroceryList'
import AddGroceryForm from './components/AddGroceryForm';

class App extends React.Component {
  state = {
    grocery: [{
      id: 1,
      title: 'bananas'
    },
    {
      id: 2,
      title: 'tomatoes'
    },
    {
      id: 3,
      title: 'apples'
    }]
  }

  addGrocery = newGrocery => {
    this.setState({
      grocery: [...this.state.grocery, {
        id: 4,
        title: newGrocery
      }]
    })
  }

  handleClick = e => {
    this.addGrocery('some other grocery')
  }



  render() {
    return (
      <div>
        <AddGroceryForm
          addGroceryFunc={this.addGrocery}
        />
        <GroceryList
          listOfGroceries={this.state.grocery}
        /> 
        <button
          onClick={this.handleClick}
        >Add grocery</button>
      </div>
    )
  }
}


export default App;
