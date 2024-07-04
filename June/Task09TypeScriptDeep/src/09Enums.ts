enum Roles{
    admin="admin",
    user="user",
    guest="guest"
}



type user={
    name:string;
    email:string;
    role:Roles;
}


let user1:user={
    name:"Pratik",
    email:"pratik@gmail.com",
    role:Roles.admin
}
let user2:user={
    name:"Amit",
    email:"pratik@gmail.com",
    role:Roles.guest
}
 

let validation:(userData:user)=>boolean =(userData:user):boolean=>{
    if(userData.role === Roles.admin){
        console.log(`you are a ${userData.role}. you can control the website`);
        return true;
    }else{
        console.log(`you are a ${userData.role}. you don't have the right to control the website`);
        return false;
    }; 
}

validation(user1);