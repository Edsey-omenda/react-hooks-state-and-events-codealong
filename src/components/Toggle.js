import React, { useState } from "react";


function Header({isOn}){

  return <h1>{isOn ? "It's on" : "It's off"}</h1>
}


function Toggle() {

const [isOn, setIsOn] = useState(false)

function handleClick(){
  setIsOn((isOn) => (!isOn));
 
}

const color = isOn ? "red" : " white";



  return( 
  <div>
    <button style = {{background : color}}  onClick={handleClick} >{isOn ? "ON" : "OFF"} </button>
  <Header isOn={isOn} />
  </div>
  )
}

export default Toggle;
