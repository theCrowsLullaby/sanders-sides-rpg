import './App.css';
import React,{Component} from "react";
import historia from "./hist.json"
import Options from "./Options.js"

var start=18;
class App extends Component{
  constructor(){
    super()
    this.state={
      options:historia[start].options,
      current:start,
      dialog: historia[start].text,
      background: 'black'
    }
  }

  setCurrent=(val)=>{
    this.setState({
      current:val,
      options:historia[val].options,
      dialog: historia[val].text
    })
  }

  render(){
    var text=this.state.dialog.split('\n').map(c => {
      return ( <p> {c} </p>) 
       });
    return (
    <div className="background">
    <div className="App">
      <div>{text}</div>
      <Options name="options" options={this.state.options} setCurrent={this.setCurrent}/>
      
    </div>
    </div>
  );}
}

export default App;
