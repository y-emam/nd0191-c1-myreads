import "../App.css";
import updateBooks from "../services/updateBooks";
import React from "react";

const BookItem = ({
  book,
  removeFromShelvesArr,
  setCurrentlyReadingBooks,
  setReadBooks,
  setWantToReadBooks,
}) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: book.imageLinks
                ? `url(${book.imageLinks.thumbnail})`
                : null,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              <option
                onClick={() => {
                  updateBooks(
                    book,
                    "currentlyReading",
                    removeFromShelvesArr,
                    setCurrentlyReadingBooks
                  );
                }}
                value="read"
              >
                Currently Reading
              </option>
              <option
                onClick={() => {
                  updateBooks(
                    book,
                    "wantToRead",
                    removeFromShelvesArr,
                    setWantToReadBooks
                  );
                }}
                value="wantToRead"
              >
                Want to Read
              </option>
              <option
                onClick={() => {
                  updateBooks(book, "read", removeFromShelvesArr, setReadBooks);
                }}
                value="read"
              >
                Read
              </option>
              <option
                onClick={() => {
                  updateBooks(book, "none", removeFromShelvesArr);
                }}
                value="none"
              >
                None
              </option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors[0] : null}
        </div>
      </div>
    </li>
  );
};

export default BookItem;
