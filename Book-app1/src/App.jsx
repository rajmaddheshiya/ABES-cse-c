import React from "react";
import Book from "./component/Book.jsx";
import  Nav from "./component/nav.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav  />
      <br />
      <br />
       <div id="adi">
      <Book
        img="https://m.media-amazon.com/images/I/81zbtTVKFEL._AC_UF350,350_QL80_.jpg"
        title="Math1"
        price="500"
      />
      <Book
        img="https://img.bookchor.com/images/cover/bc/9789387535626_16717863990.jpeg"
        title="Maths2"
        price="699"
      />
      <Book
        img="https://m.media-amazon.com/images/I/71PdteUUeCL.jpg"
        title="maths3"
        price="599"
      />
      </div>
    </>
  );
}

export default App;
