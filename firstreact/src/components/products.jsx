import React from "react"
import './productscss.css'

const  Products= (props) => {
    var col=props.Price >=1000 ? "green" : "orange"
    


    return  ( 
         <div> 
         <h1 style={{backgroundColor:"aqua"}}>{props.title}</h1>
         <p>Product Details</p>
         <div className={col}>
         <b>Price:</b>{props.Price} </div>
         {props.count}
         <button onClick={
             ()=>{
                props.onadd(props.title)
             }
         }>Add To cart</button>

        
        
         </div>

    )
     
}
 
export default Products;