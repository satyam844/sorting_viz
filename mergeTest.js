function test(){
    const test = [7,6,5,4,3,2,1];
    test = mergeSortNew(test);
    console.log(test);
}
function mergeSortNew(array){
    if(array.length <=1) return array;
    const mid = Math.floor(array.length/2);
    const left = array.slice(0,mid);
    const right = array.slice(mid);
    return merge(mergeSortNew(left),mergeSort(right));
}

function merge(left,right){
    const result = [];
    if(left[0] < right[0]){
        result.push(left.shift());
    }
    else{
        result.push(right.shift());
    }
    return result.concat(left.slice()).concat(right.slice());
}