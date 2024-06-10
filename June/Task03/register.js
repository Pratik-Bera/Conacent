function onFormSubmit(event){
    event.preventDefault();
    let data=readData();
    clearForm();
    storeLocally(data);
    
}

function readData(){
    let form = document.getElementById("reg-form");
    let formData = new FormData(form);
    let data = Object.fromEntries(formData);
    console.log(data);
    // let data = {};
    // for(let entry of formData.entries()){
    //     console.log(entry[0] +" : "+ entry[1]);
    //     data[entry[0]] = entry[1];
    // }
    // console.log(data);
    return data;
}

function clearForm() {
    document.getElementById('reg-form').reset();
  }