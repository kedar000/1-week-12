import { string } from "zod";

interface User  {
    name : string;
    age : number;
}

function sumAge(user1 : User , user2 : User){
    return user1.age + user2.age;
}

const sum : number = sumAge({name : "kedar" , age : 22} , {name : "kk" , age : 18})
console.log(sum);

//------------------------

interface userInfo{
    id : string;
    username : string;
    email : string;
    age : string;
    password : string;
}

type updateProps = Pick< userInfo, 'username' | 'age' | 'password' >

//-------------------------------making alll optional 
type updatePropsOptional = Partial<updateProps>



function updateUser (updateInfo : userInfo){

}

//------readonly for an object

type obj = {
    readonly username : string;
    readonly age : number
}

const newobj = {
    username : "kedar",
    age : 21
}

//if we change the newobject inner connect it will show error 

//newobj.name = "kdascblb"
