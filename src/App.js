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
    this.timer=this.timer.bind(this)
    this.toggleTimer=this.toggleTimer.bind(this)
    this.convertTimeToHuman=this.convertTimeToHuman.bind(this)
  }
  
handleChange(e){
    this.setState({
      input:e.target.value
    })
}
handleSubmit(e){
    e.preventDefault()
    let projects,array,id
    projects=this.state.projects
    array=this.state.projects;

    projects.length>0 ? id = projects[projects.length - 1].id + 1 : id = 0
    array.push({id,
      name:this.state.input,
      time:0,
      humanTime:'00 : 00 : 00',
      intervalID:id,
      active:true
    })
    this.setState({
      projects:array,
      input:''
    })
    this.timer(id)  }

timer(id){
    let seconds,items,item,intervalID;
    
    intervalID=setInterval(()=>{
      items=[...this.state.projects];
      item={...items[id]};
      seconds=item.time
      seconds++
      item.time=seconds
      item.intervalID=intervalID
      item.humanTime= this.convertTimeToHuman(seconds);
      items[id]=item
      this.setState({
        projects:items
      })
     
      
    },1000)
  } 
  toggleTimer(project){
    var items,item
    items=[...this.state.projects];
    item=items[project.id]
    clearInterval(project.intervalID)
    if(project.active){
      item.active=!item.active
    } else {
      item.active=!item.active
      this.timer(project.id)
    }
    items[project.id]=item
    this.setState({
      projects:items
    })}

  convertTimeToHuman(currentSeconds){
    var timeHours,timeMinutes,timeSeconds,timeHoursMinutes;
    timeHours=Math.floor(currentSeconds / 3600);    
    timeMinutes=Math.floor((currentSeconds - (timeHours * 3600)) / 60);
    timeSeconds=currentSeconds - (timeHours * 3600) - (timeMinutes * 60);

    if (timeHours   < 10) {timeHours   = "0"+timeHours;}
    if (timeMinutes < 10) {timeMinutes = "0"+timeMinutes;}
    if (timeSeconds < 10) {timeSeconds = "0"+timeSeconds;}

    timeHoursMinutes=timeHours+' : '+timeMinutes+' : '+timeSeconds;
		console.log("​convertTimeToHuman -> timeHoursMinutes", timeHoursMinutes)
    return timeHoursMinutes
  }
 
  render() {
    return (
      <div className="App">
      <h1 className='logo'>slavik</h1>
      <div className="container">
       <Projectsinput  vals={this.state.input} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  />
       <div className="items-list">
       {this.state.projects.map(e=> 
          <ProjectItem 
          state={this.state}
          current={e} 
          toggleTimer={()=> this.toggleTimer(e)}
          />)
        }
       </div>
      
      </div>
      </div>
    )
  }
}

export default App;
