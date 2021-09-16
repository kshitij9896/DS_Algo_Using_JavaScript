// Divide & Conquerer Techiqunies
//Find the Index of Given no in a sorted array
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ===> index 6 => output 
//min =0, element=1
//maxarray.length-1,element=15
//minindex=(min+max)/2 => 7(index) ,elememt at = 8
//if array[minIndex] < number(7) 
//min=minIndex+1;
//array[minIndex] > number 

function searchAlgo(array,num){
    let min=0;
    let max =array.length-1;
    while (min <= max ){
         let midIndex = Math.floor((min + max) /2);
         console.log("midIndex" + midIndex + "min" + min + "max" + max);
         if(array[midIndex] < num){
             min=midIndex+1;
         } 
         else if(array[midIndex] > num){
             max = midIndex-1;
         }
         else{
             return midIndex;
         }
    }
    return -1;
}

const result = searchAlgo([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(result);

// time complexity binary O(log(n))
