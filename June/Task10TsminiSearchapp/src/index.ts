
let search:HTMLElement|null = document.getElementById("user");
let formSubmit:HTMLElement|null=document.getElementById("form");
let mainContainer : HTMLElement|null=document.getElementById("mainContainer");

interface UserData{
    id:number;
    login:string;
    avatar_url:string;
    location:string;
    url:string;
}

async function fetcher<T>(url:string, options?:RequestInit):Promise<T>{
    let response= await fetch(url);
    console.log(response);
    if(!response.ok){
        console.error("Network Responce was not ok - status: " + response.status);
    }
    console.log(response);
    let data:Promise<any> = response.json();
    console.log(data);
    return data;
} 

function fetchUserData(url: string){
    let data:Promise<UserData[]>=fetcher<UserData[]>(url);
    console.log(data);
}

fetchUserData("https://api.github.com/users");