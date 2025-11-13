import React, { useEffect, useState } from 'react'
import Fashion from './components/fashion.jsx'

function App() {
  const [books, setBooks]=useState([]);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>setBooks(data)
     )
    },[]);

  return (
    <div>
      {
      books.map((b,i)=>(
        <Fashion key={i} image={b.image} price={b.price} title={b.title} />
      ))
      }
      <Fashion />
    </div>
  )
}

export default App