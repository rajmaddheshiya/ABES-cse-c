import { useState } from 'react'
import Card from './Component/card'
import Navbar from './Component/Navbar'
import './App.css'

function App() {
  return (
    <>
      <Navbar content1="Home" content2="About" content3="Contact"/>
      <Card name="Rahul" Education="B.Tech Computer Science"/>
      <Card name="Rajiv" Education="B.Sc Computer Science"/>
      <Card name="Raju" Education="B.Sc Computer Science"/>
    </>
  )
}


export default App