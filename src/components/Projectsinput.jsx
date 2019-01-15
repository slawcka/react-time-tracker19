import React from 'react';

const Projectsinput = (props) => {
    return (
        <div>
            <h1>Enter your project</h1>
           
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.vals} onChange={props.handleChange}/>
                <input type="submit" value='go'  />
            </form>
             
        </div>
    );
};

export default Projectsinput;