import React from 'react';
import {useEffect} from "react";



function Array(props) {
  return <div className="arrayContainer" >
      {props.array.map((element,index) => {
          return <div className="arrayBar" style={{height: `${element}px`}} 
          key={index}
          ></div>
      })}
  </div>;
}

export default Array;
