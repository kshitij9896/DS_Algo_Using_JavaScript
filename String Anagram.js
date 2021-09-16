// String Anagram
// Number of Letters Are same but the arrangements are differents
// 'hello' =>  'llheo'
//{h: 1, e: 1, l: 2, o: 1}

// condition 
// length check (for Both strings)

function isAnagram(string1,string2){

    if(string1.length!=string2.length){
        return false;
    }

    let counter ={}
    for (let letter of string1){
        // console.log(letter);
        counter[letter]=(counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }  //(for letter of string1)
    console.log(counter);

    for (let items of string2){
        if(!counter[items]){
            return false;

        }
        counter[items] -1 ;
      }

    return true;  
}



const check = isAnagram('hello','llleo');
console.log(check);

//Linear Time Complexity o(n)
