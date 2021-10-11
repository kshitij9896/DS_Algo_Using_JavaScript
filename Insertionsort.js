//Insertion Sort algoritham 
//program to understand insertion sort


const arr = [8,2,4,1,3];

const sorted=(arr)=>{
    for (let i=1; i<arr.length;i++){
        let cur = arr[i];
        let j=i-1;
        while (j>=0 && arr[j]>cur){
            arr[j+1]=arr[j];  //tmp [2,8,4,1,3]
            j--;
        } 

        arr[j+1]=cur;  //[2,8,4,1,3]

    }
    return arr;
} 
const res= sorted(arr);
console.log(res);

//1st Iteration [2,8,4,1,3]
//2nd Iteration [2,4,8,1,3]