import React, { useState } from "react";
import "./App.css";

function App() {
  const [toggles, setToggles] = useState('switchoff');
  const[on,seton] = useState('OFF');
const toggle =()=>{
  if(toggles === 'switchoff'){
    setToggles('display')
    seton('ON')
  }
  else{
    setToggles('switchoff')
    seton('OFF')
  }
}
  return (
    
    <div className={toggles}>
      <h1 className="header">Switch screen</h1>
      <div className="btn-div">
      <button className="btn" onClick={toggle}>
       Toggle
      </button> <br/>
      </div>
      <h4 className='on'>{on}</h4>
    </div>
    
  );
}

export default App;
