import React from 'react';

const ProjectItem = (props) => {

    return (
        <div className='box'>
         { props.projects.map(e=> {
             
              return (
                  <h1>labas {e.time}</h1>
              )
          })}
          
          
        </div>
    );
};

export default ProjectItem;



