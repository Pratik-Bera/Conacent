$(document).ready(function(){
    $("#btn-fetch").click(() =>{
            // $.ajax({
            //     url: "https://jsonplaceholder.typicode.com/todos/1",
            //     type: "GET",
            //     dataType: "json",
            //     success: function(data,status){
            //         console.log(data,status);
            //     },
            //     error: function(err,status){
            //         console.log("Error Block");
            //         // console.log(err);
            //         console.log("the status is :"+status);
            //     }
            // });     
            
                        
            $.get("https://jsonplaceholder.typicode.com/todos",(data,status) =>{
                console.log(data);
            })
          
    });

    let data={
        name : "pratik",
        title: "Bera"
    }

    $("#btn-manipulate").click(function(){
        console.log(data);
        $.post("https://jsonplaceholder.typicode.com/posts",data, function(data , status) {
            console.log(data);
        });
    })
});