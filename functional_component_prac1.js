import React from "react"
import ReactDom from "react-dom"
function MyName() {
  return (
    <div> 
    <p style={{color:"pink"}}> this is a paragraph practiced by rajan for first time</p>
    <h1> hey </h1> 
    </div>
  )
}
ReactDom.render(
  <MyName /> , 
  document.getElementById("root")
)


