import React from 'react'
import Grocery from './Grocery'

const GroceryList = props => {
  let listOfGroceries = props.listOfGroceries.map(
    grocery => <Grocery key={grocery.id} grocery={grocery} />
  )
  return (
    <div>{listOfGroceries}</div>
  )

}

export default GroceryList
