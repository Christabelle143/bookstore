
import React from "react"
function books(props){
    return(
        <>
        <div className="books-container">
        <h2 className="book-title">{props.title}</h2>
        <p className="book-author">{props.author}</p>
        <button className="remove-btn">Remove</button>
        </div>
        </>
    );
}
export default books;