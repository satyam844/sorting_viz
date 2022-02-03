// import { useEffect } from "react";
import {createColor,createAnimation} from "../SortingVisualizer/SortingVisualizer"

function bubbleSort(arr,setArr,doneElements,setDoneElements){
    let delay=100,swapped,i;
    const array = [...arr];
    const tempDoneElements = [...doneElements];
    for(i=0;i<array.length-1;i++){      
         swapped = false;
         for(var j=0;j<array.length-i-1;j++){
      createColor([j,j+1],delay,"Compare");           
      delay +=100;
            if(array[j]>array[j+1]){
         createAnimation(array,j,j+1,delay);
        //    let temp = array[j];
        //      array[j] = array[j+1];;
        //      array[j+1] = temp;
        //   
        delay += 100;
           swapped = true;
    }
    createColor([],delay,"None");
    delay += 100;
            // setArr([...array]);        
        }
        tempDoneElements.push(array.length - i -1);
        createColor(tempDoneElements,delay,"Done");
        delay += 100;
    }
   for(var k=0;k<array.length-i-1;k++){
       tempDoneElements.push(k);
   }
   createColor(tempDoneElements,delay,"Done");
   delay += 100;
}
export default bubbleSort;