//Sorting using Recursive function .
// [2,3,1,4] -> By default Case
// [2,1,3,4] -> case 1
// [1,2,3,4] -> Final Output

let myArray = [2,3,1,4,6,9,8,5];
let myNewlist = [];
let i=0;
let j=1;

function isSorted(array){
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
             return false;
        }
    }
    return true;
}


function sortCheck(array){
if(isSorted(array)){
    myNewlist=array;
    return;
}

   else if(array[i] < array[j] ){
        i++;
        j++;
        sortCheck(array); 

    }else{
        [array[i],array[j]]= [array[j],array[i]]
        i=0;
        j=1;
        sortCheck(array);
    }
}

sortCheck(myArray);
console.log(myNewlist);