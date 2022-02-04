import React from 'react';
import {useState} from "react";
import "./SortingVisualizer.css";
import Array from "./Array";
import  bubbleSort  from '../SortingAlgorithm/bubbleSort';
import Header from './Header.js';

function SortingVisualizer() {
  const randomIntFormInterval = (min,max) =>{
    return Math.floor(Math.random()*(max-min + 1) + min);
  }

  const [arr,setArr] = useState([]);
  const [length,setLength] = useState(50);
  const [speed,setSpeed] = useState(250)
  const [compare,setCompare] = useState([]);
  const [swap,setSwap] = useState([]); 
  const [sortedIndex,setSortedIndex] = useState([]);
  const [sorting,setSorting] = useState(false);
  const [completed,setCompleted] = useState(true);

function handleSort(order){
  
  setSorting(true);
  (function loop(i) {
    setTimeout(function () {
      const [j, k, array, index] = order[i]
      
    //  console.log("j = "+j +" k = "+k+"Comparing");
      setCompare(()=> {
        return [j,k];
      });
      // console.log(compare);
      setSwap([]);

      if(index !== null){
        setSortedIndex((prevState) => (
          [...prevState, index]
        ))
      }
      if(array){   
        setArr(array)
        if(j !== null || k !== null)
       setSwap(()=>{
         return [j,k];
       })
      //  console.log(swap);
      }
      if (++i < order.length){
        loop(i)
      } else {
        setSorting(false)
        setCompleted(true)
      }   
    }, speed)
  })(0)
     }

  function generateNewArray(){
     setCompleted(false);
     setSorting(false);
     setSortedIndex([]);
    console.log("Generate new array...");
  const temp = [];
  for(var i=0;i<length;i++){
  temp.push(randomIntFormInterval(5,1000));
  }
  // console.log(temp)
  setArr([...temp]);
  }
  function handleBubbleSort(){
   bubbleSort(arr,setArr);
  }
  
  return <div>
  
      <Array 
      array={arr} 
     compare={compare}
     swap={swap}
     sorted={sortedIndex}
     sorting={sorting}
      />
     <Header generateArray={generateNewArray}
       bubbleSort={handleBubbleSort}
       array={arr}
       handleSort={handleSort}
      />
  </div>;
}

export default SortingVisualizer;
