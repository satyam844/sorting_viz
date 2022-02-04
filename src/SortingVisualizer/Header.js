import React from 'react';
import BubbleSort from "../SortingAlgorithm/BubbleSort.jsx"


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
      <BubbleSort 
      array={props.array}
      handleSort={props.handleSort}
       />
  </div>;
}

export default Header;

