import React from 'react';

const Display = (props) => {
  // the h3 should show the numbers or symbols in the calculator display
  // where should this information be coming from?
  // does this need to be a class component?

  // num function is taken from Calculator through declared num variable in Calculator.....
  return (
    <div className="display">
      <h5 key="h1" className="display_text">
      {props.num}      
      </h5>
    </div>
  );
}

export default Display;

