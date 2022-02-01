import React from 'react';
import {useState} from "react";
import "./SortingVisualizer.css";
import Header from './Header.js';
function SortingVisualizer() {
 const oldArr = [];
 for(var i=0;i<300;i++){
 oldArr.push(Math.floor(Math.random()*995)+5);
 }
  const [arr,setArr] = useState(oldArr);

  function generateNewArray(){
    console.log("Generate new array...");
  }

  return <div className="arryContainer">
  
     {arr.map((element,index) =>{
     return  <div className="arrayBar"
     key={index}
       style={{height:`${element}px`}}
        ></div>
     })}
     <Header generateArray={generateNewArray} />
  </div>;
}

export default SortingVisualizer;
