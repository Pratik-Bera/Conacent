function onFormSubmit(event){
    event.preventDefault();
    let form = document.getElementById("reg-form");
    // console.log(form);
    let formData = new FormData(form);
    // console.log(formData)
    // let data = Object.fromEntries(formData);
    // console.log(data);
    
    for(let entry of formData.entries()){
        console.log(entry[0] +" : "+ entry[1]);
    }
}
// not null