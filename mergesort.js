// MERGESORT
function mergeSort(arr){
  if (arr.length <= 1) return  arr;
  let mid =  Math.floor(arr.length /2);
  let left = mergeSort(arr.slice(0,mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left,right);
}

//merging

function merge(left ,right ) {
  let mergedArr = []
  while(left.length>=1 && right.length>=1){
    const min = left[0]< right[0] ? left:right;
    const mergedMin = min.shift()
    mergedArr.push(mergedMin);
  }

  return mergedArr.concat(left,right);
}