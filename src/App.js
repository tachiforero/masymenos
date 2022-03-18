import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function App() {

  const [count, setCount] = useState(4)

  function bajarcuenta(){
    setCount(prevCount => prevCount-1)
  }

  function subircuenta(){
    setCount(prevCount => prevCount+1)
  }


  return (
    <div className = "botones">
      <button onClick={bajarcuenta}>-</button>
      <span>{count}</span>
      <button onClick={subircuenta}>+</button>

      
    </div>
  );
}

export default App;
