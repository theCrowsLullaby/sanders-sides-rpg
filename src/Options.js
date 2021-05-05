import './App.css';
import React,{Component} from "react";

class Options extends Component{
  constructor(){
    super()
    this.state={

    }
  }

  setCurrent =(event)=> {
    const {value} = event.target
    this.props.setCurrent(value)
  }

  render(){
    var b1=this.props.options.id1? <button id="b1" onClick={()=>{this.props.setCurrent(this.props.options.id1.next)}}>{this.props.options.id1.text}</button> : ""
    var b2=this.props.options.id2? <button id="b2" onClick={()=>{this.props.setCurrent(this.props.options.id2.next)}}>{this.props.options.id2.text}</button> : ""
    var b3=this.props.options.id3? <button id="b3" onClick={()=>{this.props.setCurrent(this.props.options.id3.next)}}>{this.props.options.id3.text}</button> : ""
    return (
    <div>
        <button id="b0" onClick={()=>{this.props.setCurrent(this.props.options.id0.next)}}>{this.props.options.id0.text}</button>
        {b1}
        {b2}
        {b3}
    </div>
  );}
}

export default Options;
