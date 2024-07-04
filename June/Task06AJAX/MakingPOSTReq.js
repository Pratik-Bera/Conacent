$(document).ready(()=>{
    $("#fetchBtn").click(()=>{
        console.log("ready");
        const xhr = new XMLHttpRequest();
        let postUrl = 'https://jsonplaceholder.typicode.com/posts';
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/users' ,true);
        xhr.getResponseHeader('Content-Type', 'application/json');
        let obj = {};

        xhr.onload = ()=>{
            if(xhr.status === 201){
                console.log(JSON.parse(xhr.responseText));
            }
            else{
                console.log("Error");
            }
        }
        xhr.send(JSON.stringify(obj));
    });
});