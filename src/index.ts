interface User  {
    name : string;
    age : number;
}

function sumAge(user1 : User , user2 : User){
    return user1.age + user2.age;
}

const sum : number = sumAge({name : "kedar" , age : 22} , {name : "kk" , age : 18})
console.log(sum);


