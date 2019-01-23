import React from 'react';

const Projectsinput = (props) => {
    return (
        <div className="form">
            <h1>Enter your project</h1>
           
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.vals} onChange={props.handleChange}/>
                <button type="submit"><i className="material-icons">
keyboard_arrow_right
</i></button>  
            </form>
             
        </div>
    );
};

export default Projectsinput;