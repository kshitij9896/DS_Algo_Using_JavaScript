////Checking Square in another array Optimized Solution
//arr1=[1,2,3,4], arra2=[1,9,4,16] => Case1
//arr1=[1,2,3,4], arra2=[1,4,4,16] => Case2
//map1={1:1,2:2,4:1}
//map2={1:1,4:2,16:1}

function checkSquare(array1,array2){
    let map1={};
    let map2={};


    for (item of array1){       //n time 
        map1[item]=(map1[item] || 0) + 1;
    }
    console.log("Map1", map1);

    for (item1 of array2){
        map2[item1]=(map2[item1] || 0) + 1;
 
    }
    console.log("Map2",map2);

    for (let key in map1){                     // n times
        console.log("Key",key);  
        if(!map2[key * key]){               //obj keys comparison in term of sqaure
            return false;
        }
        if (map1[key]!== map2[key * key ]){     //value compare
            return false;
        }

    }

    return true;
}


const result = checkSquare([1,2,3,4],[1,4,4,16]);
console.log(result);


//time complexity => O(n) linear
