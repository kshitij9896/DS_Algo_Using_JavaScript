//linear Search Algoritham

const users = [{username:"abc",email:"demo@gmail.com"},
               {username:"xyz",email:"xyz@gmailcom"},
               {username:"pqr",email:"pqr@gmailcom"},]
// Linear Search Algoritham => const users =[{username:"abc",email:"abc@gmail.com"}]

function isUserExit(array,val){


for(let item of array){
    // console.log(item['username']);
    if(item['username']=== val){
        return  true;
    }

}
 return false;
}

const result = isUserExit(users,"abc");
console.log(result);

// Time Complexity  => linear o{n}
