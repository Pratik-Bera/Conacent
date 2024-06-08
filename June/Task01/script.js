let selectRow=null;

function onFormSubmit(){
    let data = readData();
    // console.log(data);
    if(selectRow==null){
        insertNewData(data);
    }else{
        updateRecord(data);
    }
    resetForm();

}

function readData(){
    let data = {};
    data["name"] = document.getElementById("name").value;
    data["address"] = document.getElementById("address").value;
    data["email"] = document.getElementById("email").value;
    data["gender"] = document.querySelector('input[name="gender"]:checked').value;
    data["religion"] = document.getElementById("religion").value;
  
    return data;
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
    selectRow=null;
}

function insertNewData(data){
    const table = document.getElementById("user-list").getElementsByTagName("tbody")[0];
    // console.log(table);
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.address;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.gender;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.religion;
    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)"> Edit </a>`;
    let cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onDelete(this)"> Delete </a>`;

}


function onEdit(td){
    selectRow = td.parentElement.parentElement;       // select whole row
    document.getElementById("name").value = selectRow.cells[0].innerHTML;
    document.getElementById("address").value = selectRow.cells[1].innerHTML;
    document.getElementById("email").value = selectRow.cells[2].innerHTML;
    const genderRadio = document.querySelector(`input[name="gender"][value="${selectRow.cells[3].innerHTML}"]`);
    genderRadio.checked = true;
    document.getElementById("religion").value = selectRow.cells[4].innerHTML;
}

function updateRecord(data){
    selectRow.cells[0].innerHTML = data.name;
    selectRow.cells[1].innerHTML = data.address;
    selectRow.cells[2].innerHTML = data.email;
    selectRow.cells[3].innerHTML = data.gender;
    selectRow.cells[4].innerHTML = data.religion;
}

function onDelete(td){
    selectRow = td.parentElement.parentElement;       // select whole row
    selectRow.parentElement.removeChild(selectRow);
}
