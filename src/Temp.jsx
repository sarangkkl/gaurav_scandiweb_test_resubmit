import React, { Component } from 'react'
import { Link  } from 'react-router-dom'
export class Temp extends Component {

    
  render() {
    const RedirectFunc = () =>{
        // Logic to redirect to cart page

        // Some other login i want to use before the page gets changed thats why i cant use Direct link
        console.log("I got click")
     }
        
    return (
      <div>
        <button onClick={()=>{RedirectFunc()}}></button>
      </div>
    )
  }
}

export default Temp