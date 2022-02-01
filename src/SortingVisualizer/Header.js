import React from 'react';

function Header(props) {
function generateArray(event){
props.generateArray();
}

  return <div>
      <button onClick={generateArray} >Generate New Array</button>
      <button>Merger Sort</button>
  </div>;
}

export default Header;

