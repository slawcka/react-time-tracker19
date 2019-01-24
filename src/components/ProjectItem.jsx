import React, { Component } from 'react';

class ProjectItem extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
        //this.timer=this.timer.bind(this)
        //this.toggleTimer=this.toggleTimer.bind(this)
        //this.archiveItem=this.archiveItem.bind(this)

    }
   /*  timer(id){
        let seconds,items,item,intervalID;
        
        this.intervalID=setInterval(()=>{
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

      archiveItem(project){
        clearInterval(project.intervalID)
        var items, current,itemsDeleted;  
        current= project.id
        console.log('current: ', current);
        items=[...this.state.projects];
        itemsDeleted=items.slice(current)
        console.log('itemsDeleted: ', itemsDeleted);
    
        this.setState({
          projects:itemsDeleted
        })
      } */
    
   /* TEMP
  current.active ? 'item-list__item active':'item-list__item false' 
   
   
   */ 
    render() {
        var {current}=this.props
        var props=this.props
        let itemClass=['item-list__item'];
        current.archived && itemClass.push('archived')
        current.active && itemClass.push('active') 

    let resume=<i className="material-icons md-48"> play_circle_outline</i>
    let pause=<i className="material-icons">pause_circle_outline</i>
        return (
            <div className={itemClass.join(' ')}>
                <h3>{current.name} </h3>
                <p>{current.humanTime}</p>
                <button onClick= {props.toggleTimer}>{current.active ? pause:resume} </button>
                <button onClick= {props.archive}>archive </button>
            </div>
        );
    }
}

export default ProjectItem;




