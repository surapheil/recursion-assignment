// iterative method

function fibonacci(n){
    arr = [0,1]
    for (i = 2; i< n; i++){
       arr[i] = arr[i-1] + arr[i-2]
    }

    return arr
}

//recursion method

function fibRec(n){
 if (n<2){
    return n;
 }
 else{
    return fibRec(n-1) + fibRec(n-2);
 }
}

let n = 8;
let arra = [];
for (let i = 0; i<n;i++){
    arra[i] = fibRec(i);
}

// 

