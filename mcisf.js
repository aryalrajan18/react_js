import React from "react"
import ReactDom from "react-dom"
import MyInfo from "./MyInfo.js"
ReactDom.render(<MyInfo />, document.getElementById("root"))
// part one of indexjs

//part two of component my info
import React from "react"
function MyInfo(){
    return(
        <div> 
        <p style={{color:"blue"}}> hello this is a blue color </p>
        </div>
    )
}
export default MyInfo


