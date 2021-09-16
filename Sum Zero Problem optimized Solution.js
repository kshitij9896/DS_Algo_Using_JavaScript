//The 2nd Solution
//Checking Sum Zero Problem 
//[-5, -4,-3, -2,0, 2,4,6,8] => Input 
//[-4,4] => Output

function FindSumPair(array) {
   let left=0;   //'left' is declared but its value is never read
   let right=array.length-1; // 'right' is declared but its value is never read 


  while (left < right ){
      sum=array[left]+array[right];
      if(sum===0){
          return [array[left], array[right]];
      }else if(sum > 0){
          right--;
      }else {
          left++;
      }
  }
 
}


const result = FindSumPair([-5,-4,-3,-3,0,2,4,6,8]);
console.log(result);


//Time Complexcity
//O(n) linear 