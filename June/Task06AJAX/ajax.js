console.log("Starting learning ajax ...");

$(document).ready(function(){
    $("#fetchBtn").click(function(){
        buttnClickHandler();
    });
});

function buttnClickHandler(){
    let xhr = new XMLHttpRequest();
    console.log (xhr);
    xhr.open('GET','Test.txt',true);

    // xhr.onreadystatechange = function(){
    //     if(xhr.readyState == 4 && xhr.status == 200){
    //         console.log(xhr.responseText);
    //     }
    // };

    xhr.onload = () =>{
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
        }
    }
    xhr.send();
};