

import React from 'react';

const ProjectItem = (props) => {
    let item=props.current
    let state=props.state
   
        return (
            <div className={item.active ? 'item active':'item false'}>
                  <h1>labas {item.time}</h1>
               
                <button onClick={props.clear}>{item.active? 'pause':'resume'}</button>
            </div>
        );
    
}

export default ProjectItem;




