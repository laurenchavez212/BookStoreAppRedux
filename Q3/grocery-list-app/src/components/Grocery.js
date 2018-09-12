import React from 'react'

const Grocery = (props) => {
  console.log('props in grocery', props)
  return (
    <div>{props.grocery.title}</div>
  )

}

export default Grocery
