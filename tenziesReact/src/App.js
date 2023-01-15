import React, {Component} from 'react';
import './App.css';
import Appli from "./Appli.js"

class App extends Component  {

  render(){
    return (
      <div>
        <Header />
        <Body />  
      </div>
    );
  }
}

export default App;