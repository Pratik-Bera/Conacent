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
    dataList.push(data);
    storeLocally(dataList);
    // console.log(data);
    // console.log(dataList);
    console.log("Submitted");
    
    
    
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

function storeLocally(dataList){
    localStorage.setItem("dataList",JSON.stringify(dataList));
}

// function created for nav menu toggle button.
function show(){
    document.querySelector('.hamburger').classList.toggle('open');
    document.querySelector('.navigation').classList.toggle('active');
}