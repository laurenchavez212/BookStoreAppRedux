import React from 'react';
import { connect } from 'react-redux'
import Book from './Book'
import { Container } from 'reactstrap'

const BookList = (props) => {
    console.log('props in booklist', props);
    let listOfBooks = props.books.map(book => <Book key={book.id} book={book}/>)
    return (
        <Container >
            {listOfBooks}
        </Container >
    );
};

const mapStateToProps = state => ({
    books: state.books
})

export default connect(mapStateToProps)(BookList);