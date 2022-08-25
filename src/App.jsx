import React from "react"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Data from "./data"

export default function App() {
  const content = Data.map(item => {
    return ( 
      <Content
        key={item.id}
        item = {item}
      />
    )
  })
  return (
    <div>
      <Navbar /> 
      { content }
    </div>
  )
}

