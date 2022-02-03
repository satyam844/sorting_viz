import React from 'react';
import {useState} from "react";
import "./SortingVisualizer.css";
import Array from "./Array";
import  bubbleSort  from '../SortingAlgorithm/bubbleSort';
import Header from './Header.js';
import { set } from 'mongoose';
function SortingVisualizer() {

 const oldArr = [];
 for(var i=0;i<300;i++){
 oldArr.push(Math.floor(Math.random()*995)+5);
 }
  const [arr,setArr] = useState(oldArr);
  const [doneElements,setDoneElements] = useState([]);
  const [compareElements,setCompareElements] = useState([]);

  function createColor(tempElements,delay,action){
  switch(action){
    case "Done" :
       const newDoneElements =[...tempElements];
       setTimeout(function(){
         setDoneElements([...newDoneElements]);
       },delay);
       break;
       case "Compare" :
         setTimeout(function(){
           setCompareElements([...tempElements])
         },delay);
         break;
         default:
           setTimeout(function(){
             setCompareElements([]);
           },delay);
  }
  }
  function createAnimation(tempArray,indexOne,indexTwo,delay){
    const temp = tempArray[indexOne];;
    tempArray[indexOne] = tempArray[indexTwo];
    tempArray[indexTwo] = temp;
    const newArray = [...tempArray];
    setTimeout(() => {
      setArr([...newArray]);
    },delay);
  }

  function generateNewArray(){
    console.log("Generate new array...");
    const newArray = [];
    for(var i=0;i<300;i++){
      newArray.push(Math.floor(Math.random()*955)+5);
    }
    setArr(newArray);
  }
  function handleBubbleSort(){
   bubbleSort(arr,setArr,doneElements,setDoneElements);
  }
  
  return <div className="arryContainer">
  
    <Array array={arr} />
     <Header generateArray={generateNewArray}
       bubbleSort={handleBubbleSort}
      />
  </div>;
}

export default SortingVisualizer;
