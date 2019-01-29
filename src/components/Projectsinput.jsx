import React from "react";

const Projectsinput = ({handleSubmit,vals,handleChange,children}) => {
 
  return (
    <div className="form">
      <h1>Enter your project</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={vals} onChange={handleChange} />
        <button type="submit">
          <i className="material-icons">keyboard_arrow_right</i>
        </button>
        {children}
      </form>
      
    </div>
  );
};

export default Projectsinput;
