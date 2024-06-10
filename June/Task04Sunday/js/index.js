let x=document.getElementById("msg");
x.innerHTML = "<strong>` Welcome to Admin Panel`</strong>";
if(localStorage.getItem("loggedinUserData")){
    let data = JSON.parse(localStorage.getItem("loggedinUserData"));
    x.innerHTML = "<strong>Hi "+data.userName +", Welcome to Admin Panel</strong>";
}else{
    x.innerHTML = "<strong>Sorry You are not an Logged in user.</strong>";
    let button = document.getElementsByClassName("logout-btn")[0];
    button.style.display = "none";
}


function logout(){
    localStorage.removeItem("loggedinUserData");
    window.location.href = "index.html";
}




function show(){
    document.querySelector('.hamburger').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('active');
}