import React, { Component } from 'react';
import './App.css';
import Projectsinput from './components/Projectsinput'
import ProjectItem from './components/ProjectItem'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      input:'',
      projects:[],
      intervalID:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.updateTime=this.updateTime.bind(this)
    this.timer=this.timer.bind(this)
  }

  handleChange(e){
    this.setState({
      input:e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    let projects=this.state.projects
    let id
    if (projects.length > 0) {
      id = projects[projects.length - 1].id + 1
    } else {
      id = 0
    }
    let array=this.state.projects;
    array.push({id,name:this.state.input,time:0,intervalID:id})
    this.setState({
      projects:array
    })
    this.setState({
      input:''
    })
    this.timer(id)
  }
    timer(id){
    let seconds,items,item,intervalID;
    seconds=this.state.projects[id].time;
    //copy project from state
    items=[...this.state.projects];
    item={...items[id]};
    
    
    intervalID=setInterval(()=>{
      seconds++
      item.time=seconds
      items[id]=item
      this.setState({
        projects:items
      })
      
    },1000)
    item.intervalID=intervalID
  } 
 updateTime(id){
   this.setState({
     projects:id
   })
 }
  render() {
    return (
      <div className="App">
       <Projectsinput vals={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />
       <ProjectItem projects={this.state.projects} timer={this.timer} />
      </div>
    )
  }
}

export default App;
