import React from 'react';
import Products from './components/products'
import Counter from './components/counter';
var btnclick=(title)=>{

  alert("btn clciked"+title)

}


function App() {
  var[count,setcount]=React.useState(5);
    const onIncrement=()=>{
        setcount(count+1)
    }
    const onDecrement=()=>{
        setcount(count-1)
    }
    const onReset=()=>{
        setcount(count=0)
    }
  return (
    <div>
      
      
      <Counter count={count} handleincr={onIncrement} handledec={onDecrement} handleres={onReset}/>
      <h1 style={{backgroundColor:"green"}}>Components Example</h1>
      <Products title="Audi" Price="1200"  onadd={btnclick} count={count}/>
      <Products title="Crolla" Price="1000" onadd={btnclick} count={count}/>
      <Products title="Civic" Price="900" onadd={btnclick} count={count} />
  
      
      
    </div>
  )
  
}

export default App;
