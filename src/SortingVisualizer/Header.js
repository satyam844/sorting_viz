import React from 'react';

function Header(props) {
function generateArray(event){
props.generateArray();
}
function handlebubbleSort(){
  props.bubbleSort();
}
  return <div>
      <button onClick={generateArray}>Generate New Array</button>
      <button  onClick={handlebubbleSort} >Bubble Sort</button> 
  </div>;
}

export default Header;

