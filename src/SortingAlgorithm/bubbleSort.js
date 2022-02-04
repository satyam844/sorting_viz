// import { useEffect } from "react";
// import {createColor,createAnimation} from "../SortingVisualizer/SortingVisualizer"

function bubbleSort(array,setArr){
//    const array = [...arr]; 
    for(let i=0;i<array.length-1;i++){      
            for(var j=0;j<array.length-i-1;j++){ 
                if(array[j]>array[j+1]){
                    let temp = array[j];
                      array[j] = array[j+1];;
                      array[j+1] = temp;
             }
             setArr([...array]); 
            }       
        } 
        
    }
  
  

export default bubbleSort;