import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  //let counter=15

  const addValue=()=>{
    // counter=counter+1
    if(counter<20){
    setCounter(counter+1)//if i am writing it 5times it will not increase the value by 5time because it takes it as bunch of packages
    setCounter(prevCounter=>prevCounter+1)//but if am writint it 5 times then it will increase the value 5times 
    //now its not a bunch of packages
    }
    
  };
  const removeValue=()=>{
    // counter=counter-1
    if(counter > 0){
    setCounter(counter-1)
  }
};
  

  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter Value: {counter}</h2>
 
      <button
      onClick={addValue}
      >Add value:{counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
