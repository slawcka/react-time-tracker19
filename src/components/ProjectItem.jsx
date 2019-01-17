

import React from 'react';

const ProjectItem = (props) => {
    let item=props.current
   
        return (
            <div className={item.active ? 'item active':'item false'}>
                  <h1>{item.name} </h1>
                <h2>{item.humanTime}</h2>
                <button onClick={props.toggleTimer}>{item.active? 'pause':'resume'}</button>
            </div>
        );
    
}

export default ProjectItem;




