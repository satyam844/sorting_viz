import React from 'react';
import "./Array.css";
function Array(props) {
  return <div className="arrayContainer" >
      {props.array.map((element,index) => {
       let bgColor="pink"
      console.log(bgColor); 
       if(props.sorting && (index===props.compare[0] || index===props.compare[1])){
        {/* console.log("indside comapre sorting"); */}
        console.log(bgColor);
         bgColor = "#ffff50";
         console.log(bgColor);
       
       }
       
       if(props.sorting && (index===props.swap[0] || index===props.swap[1])){
         bgColor="red"
      
       }
     
       if(props.sorted && props.sorted.includes[index]){
         {/* console.log("inside sorted") */}
        
          bgColor="#4bc52e"
 
       }
       const style ={
         height: `${element}px`,
         backgroundColor:"bgColor"
       }
          return <div className="arrayBar" style={style} 
          key={index}
          ></div>
      })}
  </div>;
}

export default Array;
