//Count Largest sum of Consecutive Digits 
//[1,2,3,4,3,5,4,6,7,8] => Total Elements 10
//num=4 
//sum =>25
//condition 
//num >array ->error msg


function findlargest(array,num){

    if(num > array){
        throw new Error("num is not greater than array");
    }
    else{
        let max=0;
        for (let i=0; i<array.length - num + 1;i++){
               let temp=0;

            for (let j=0; j<num;j++){
                console.log("i"+i+"j",j);
                temp+=array[i + j];
            }
            if(temp > max){
                max=temp;
            }

        }
        return max;
    }
}


const result = findlargest([1,2,3,4,3,5,4,6,7,8],4);
console.log("result",result);