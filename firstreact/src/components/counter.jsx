import React from 'react'
const Counter = ({count,handleincr,handledec,handleres}) => {
    
    return (
         <div style={{padding:"2rem"}}> 

         <button onClick={handleincr}>++</button>
         {count}
         <button onClick={handledec}>--</button>
         <button onClick={handleres}>Reset</button>



         </div> );
}
 
export default Counter;