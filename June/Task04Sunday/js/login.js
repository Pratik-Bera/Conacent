let dataList = [];
if(localStorage.getItem("dataList")==null){
    dataList = [];
}else{
    dataList = JSON.parse(localStorage.getItem('dataList'));;
}

function onSubmit(event){
    event.preventDefault();
    let data = readData(event);
    clearForm(event);
    let flag=checkData(data);
    controlAction(flag,data);
    console.log(data);

}

function clearForm(event){
    event.target.reset();
}


function readData(event){
    let form = event.target;
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    return data;
}

function checkData(data){
    let flag=false;
    for(let i in dataList){
        // console.log(dataList[i]);
        if((dataList[i].userName==data.userName) && (dataList[i].password==data.password)){
            flag=true;
        }
    }
    return flag;
}

function controlAction(flag,data){
    if(flag==true){
        localStorage.setItem("loggedinUserData",JSON.stringify(data));
        window.location.href = "index.html";
    }else{
        alert("Invalid Credentials");
    }
}



function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}