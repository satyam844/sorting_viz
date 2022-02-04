import React from 'react';

function BubbleSort({array,handleSort}) {

function sort(){
  // console.log(array);
  let i,j;
    const newArray =array.slice();
    // console.log(newArray);
    const order = [];
     for( i=0;i<newArray.length;i++){
      for( j=0;j<newArray.length-i-1;j++){
        order.push([j,j+1,null,null]);
          if(newArray[j]>newArray[j+1]){
             let temp = newArray[j];
             newArray[j] = newArray[j+1];
             newArray[j+1] = temp;
            //  console.log(newArray);
            order.push([j,j+1,newArray.slice(),null]);
            }      
      }   
      order.push([null,null,null,j]);
      // console.log(newArray.slice());
     }
     handleSort(order)
}

  return <div>
      <button onClick={sort} >Bubble Sort Corrected</button>
  </div>;
}

export default BubbleSort;
