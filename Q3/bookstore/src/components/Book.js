import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions'
import { bindActionCreators } from 'redux'
// bindActionCreators gives us access to dispatch (for the action of addToCart) and we will have to mapDispatch to props

const Book = ({book, addToCart}) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{book.title}</CardTitle>
          <CardSubtitle>{book.subtitle}</CardSubtitle>
          <CardText>By {book.author}</CardText>
          <Button onClick={() => addToCart(book.id)}>
            Add To Cart
            </Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators ({
  addToCart
  // binding the action of addToCart to dispatch 
}, dispatch)

export default connect(null, mapDispatchToProps)(Book);
