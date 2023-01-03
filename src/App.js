import "./App.css"
import React from 'react'
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom"
import SingleMovies from "./components/SingleMovies"
import Error from "./components/Error"


function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      {/* <Route path="/panditprogrammer" element={<Goto url="http://panditprogrammer.com" />} />
      <Route path="/api" element={<Goto url="https://www.omdbapi.com/" />} /> */}
      <Route path="/movie/:id/" element={<SingleMovies></SingleMovies>}></Route>
      <Route path="*" element={<Error></Error>}></Route>
    </Routes>
  )
}

export default App