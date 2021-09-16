//Recursion : When The Fucntion Call Itself 
//otherwise it will get called for infinite times
// If a function call itself then there must be an end point

let counter=1;
function demo(number){
    //function with definations
    if(counter > number){
        return  
    }
    
    
    console.log("Demo Lines",counter);
    counter++;
    demo(number); // recursion function
} // function demo() function with definations 
 
demo(10);  // function calling 