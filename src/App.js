import React, { useState } from "react";

function NameEntry({myName, setMyName}){

  const handleChange=(event)=>{
    console.log(event.target.value)
    setMyName(event.target.value)
  }

  return (
    <>
      <h1>Fill in a name</h1>
      <input placeholder="Enter your name" onChange={(event)=>handleChange(event)}/>
      <br/>
      {myName}
    </>
  )
}


function ShowName({myName}){
  return (
    <div>
      <h1>Your name is: {myName}</h1>
    </div>
  )
}

function App() {
  const [myName, setMyName]=useState('')

  return (
    <div>
      Hello CAE 89
      <hr/>
      <NameEntry myName={myName} setMyName={setMyName}/>
      <ShowName myName={myName}/>
    </div>
  );
}

export default App;
