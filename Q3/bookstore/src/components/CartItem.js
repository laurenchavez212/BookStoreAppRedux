import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../redux/actions'
import { bindActionCreators } from 'redux'


const CartItem = ({book, removeFromCart}) => {
    return <div>
        <p>{book.title}</p>
        <button onClick={() => removeFromCart(book.id)}>Remove</button>
      </div>;
}

const mapDistachToProps = dispatch => bindActionCreators ({
    removeFromCart
}, dispatch)

export default connect(null, mapDistachToProps)(CartItem);