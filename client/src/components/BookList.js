import Book from "./Book"

export default function BookList({ books, saveBooks }) {

    return (
      <div className="App">
          
          <Book books={books} saveBooks={saveBooks} />
      </div>
    );
  }