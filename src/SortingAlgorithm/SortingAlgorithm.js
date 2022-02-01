export const mergeSort = (array) =>{
  let newArray = [...array];
  if(array.length <= 1) return array;
 
  const mid = Math.floor(array.length/2);
  const left = array.slice(0,mid);
  const right = array.slice(mid);
  return mergeHelper(mergeSort(left),mergeSort(right),newArray);
}
const mergeHelper =(left,right,newArray) => {
 let resultArray =[];
 let leftIndex = 0;
 let rightIndex = 0;
 while(leftIndex<left.length && rightIndex<right.length){
  let newLeftIndex = newArray.indexOf(left[leftIndex]);
  let newRightIndex = newArray.indexOf(right[rightIndex]);
 if(left[leftIndex]< right[rightIndex]){
    [newArray[newLeftIndex],newArray[newRightIndex]]= [newArray[newRightIndex],newArray[newLeftIndex]];
    resultArray.push(left[leftIndex]);
    leftIndex++;
 }
 else{
  [newArray[newRightIndex],newArray[newLeftIndex]]= [newArray[newLeftIndex],newArray[newRightIndex]];
  resultArray.push(right[rightIndex]);
  rightIndex++;
 }
 }
}