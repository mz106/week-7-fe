import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./components/cardContainer/CardContainer";
import CrudContainer from "./components/crudContainer/CrudContainer";

function App() {
  const [books, setBooks] = useState([]);
  const [resetBooks, setResetBooks] = useState(true);

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch("http://localhost:5001/books/getallbooks");
      const data = await response.json();
      console.log(data);
      setBooks(data.books);
      console.log(books);
    }
    fetchBooks();
  }, [resetBooks]);

  return (
    <div className="App">
      <CardContainer books={books} />
      <CrudContainer
        books={books}
        setBooks={setBooks}
        setResetBooks={setResetBooks}
        resetBooks={resetBooks}
      />
    </div>
  );
}

export default App;
