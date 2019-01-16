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
    this.clear=this.clear.bind(this)
    this.start=this.start.bind(this)
    this.toggler=this.toggler.bind(this)
  }
  toggler(e){
    var items,item
    items=[...this.state.projects];
		console.log("​App -> clear -> items", items)
    item={...items[e.id]};
      
        item.active=false
        this.setState({
          projects:items
        })

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
    array.push({id,
      name:this.state.input,
      time:0,
      intervalID:id,
      active:true
    })
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
    
    intervalID=setInterval(()=>{
      items=[...this.state.projects];
      item={...items[id]};
      seconds=item.time
      seconds++
      item.time=seconds
      item.intervalID=intervalID
      
      items[id]=item
      this.setState({
        projects:items
      })
      
    },1000)
  } 
  clear(project){
    var items,item
    items=[...this.state.projects];
    item=items[project.id]
    clearInterval(project.intervalID)
    if(project.active){
			console.log("​App -> clear -> project.intervalID", project.intervalID)
      item.active=!item.active
    } else {
      item.active=!item.active
      this.timer(project.id)
    }
    items[project.id]=item
    this.setState({
      projects:items
    })
    
      }
      
    

  
  start(id){
    this.timer(id)
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
       {this.state.projects.map(e=> 
       <ProjectItem 
       
       state={this.state}
       current={e} 
       update={this.updateTime}
       clear={()=> this.clear(e)}
       start={()=> this.start(e.id)}
       toggler={()=>this.toggler(e)}
       />)
        }
      </div>
    )
  }
}

export default App;
