$(document).ready(function(){
    $("#fetchBtn").click(function(){
        const xhr = new XMLHttpRequest();
        xhr.open('GET','https://jsonplaceholder.typicode.com/todos',true);
        xhr.onload = function(){
            if(this.status == 200){
                let data = JSON.parse(this.responseText);
                console.log(data);
                let output = '';
                data.forEach(function(todo){
                    output += `<li>${todo.title}</li>`;
                });
                $("#output").html(output);
            }else{
                console.log('Error');
            }
        }
        xhr.send();
    });
});