

import React from 'react';

const ProjectItem = (props) => {
    let item=props.current
    let resume=<i class="material-icons md-48"> play_circle_outline</i>
    let pause=<i class="material-icons">pause_circle_outline</i>
        return (
            <div className={item.active ? 'item-list__item active':'item-list__item false'}>
                <h3>{item.name} </h3>
                <p>{item.humanTime}</p>
                <button onClick= {props.toggleTimer}>{item.active ? pause:resume} </button>
            </div>
        );
            
}

export default ProjectItem;




