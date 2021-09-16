//Helper Recursive Function
//[1,2,3,4,5,6,7,8,9,10]
//[1,3,5,7,9] => Output
//number%2!==0

function findOdd(array){
    let result=[];
    function helperRecursive(inputArray){
        console.log("calling..");
        if(inputArray.length===0){
            return;
       }
        if(inputArray % 2!==0)
        {
            result.push(inputArray[0]);

        }
        helperRecursive(inputArray.slice[1]); //recursively call
    } 
    helperRecursive(array) //1st time calling 
    return result;
} // function findOdd(array)

const res = findOdd([1,2,3,4,5,6,7,8,9,10]);
console.log(res);

// let result = [1,2,3,4,5,6,7,8,9,10];
// console.log(result.slice[1]);

