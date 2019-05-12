import React, { useState } from 'react';
import './App.scss';

function App() {
  const [result, chooseResult] = useState("");

  function deside(){
    let resultsArray = ["Yes, you should do it!", "DO IT!", "Hard choice, but give it a try!", "Don't do it!", "Probably not!", "Don't even try!"]
    let magic =  Math.floor(Math.random() * resultsArray.length)
    chooseResult(resultsArray[magic])
  }

  return (
    <div className="App">
    <header className="App-header">
      <h1>To DO || !To DO</h1>
      <p>Sometimes it is hard to take a decision. 
        <br/> This app decides for you if you should or should not do something. 
        <br/> Write your question and wait for an answer!
      </p>
      <textarea rows="6"   placeholder="Write your question here."></textarea>
      <button onClick={deside} className="Btn-deside">DECIDE!</button>
      <h2>
        {result}
      </h2>    
    </header>
  </div>
  )
}

export default App;
