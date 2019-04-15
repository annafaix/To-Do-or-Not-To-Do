import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { result: "" }
    this.chooseResult = this.chooseResult.bind(this)
  }
  chooseResult() {
    let resultsArray = ["Yes, you should do it!", "DO IT!", "Hard choice, but give it a try!", "Don't do it!", "Probably not!", "Don't even try!"]
    let magic =  Math.floor(Math.random() * resultsArray.length)
    console.log("Processing...")
    this.setState({
      result: resultsArray[magic]
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To DO || !To DO</h1>
          <p>This app desides for you if you should or should not do something. <br/> Write your question and wait for an answer!</p>
          <textarea rows="5" cols="50"  placeholder="Write your question here, click on button and wait for the result...."></textarea>
          <button onClick={this.chooseResult} className="Btn-deside">DESIDE FOR ME!</button>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.result}</h2>    
        </header>
      </div>
    );
   }
}

export default App;
