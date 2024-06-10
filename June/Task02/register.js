let dataList = JSON.parse(localStorage.getItem('dataList'));
function onFormSubmit(event){
    event.preventDefault();
    let data=readData();
    dataList.push(data);
    storeLocally(dataList);
    resetForm();
    // console.log(dataList);
    // console.log("submitted");
}

function readData(){
    let data={};
    data["name"] = document.getElementById("name").value;
    data["address"] = document.getElementById("address").value;
    data["email"] = document.getElementById("email").value;
    data["gender"] = document.querySelector('input[name="gender"]:checked').value;
    data["religion"] = document.getElementById("religion").value;

    return data;
}


function storeLocally(data){
    localStorage.setItem("dataList",JSON.stringify(dataList));

}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("religion").value = "";

    const genderRadios = document.querySelectorAll('input[name="gender"]');
    genderRadios.forEach((radio) => {
        radio.checked = false;
    });
}


