
import React from 'react';

const ProjectItem = (props) => {
    // jei props vadinas 'current', galima const {current}=props
    var {current}=props
    let item=props.current
    let resume=<i className="material-icons md-48"> play_circle_outline</i>
    let pause=<i className="material-icons">pause_circle_outline</i>
        return (
            <div className={item.active ? 'item-list__item active':'item-list__item false'}>
                <h3>{item.name} </h3>
                <p>{current.humanTime}</p>
                <button onClick= {props.toggleTimer}>{item.active ? pause:resume} </button>
                <button onClick= {props.archive}>archive </button>
            </div>
        );
            
}

export default ProjectItem;




