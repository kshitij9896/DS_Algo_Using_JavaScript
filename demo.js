//Checking Sum Zero Problem 1
//[-5, -4,-3, -2,0, 2,4,6,8]
//[-4,4] => Output

function getSumPairZero(array){
	for(let number of array){
		// console.log("Outer loop");		
		for (let j=1; j<array.length; j++)
		{
			// console.log("Inner Loop");	
			if(number + array[j] === 0)
			{
					return [number,array[j]];
			}
		}

	}
} 

const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);

//0(0^2) quadratic time complexity 
