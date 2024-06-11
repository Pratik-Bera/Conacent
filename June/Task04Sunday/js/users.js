let dataList = localStorage.getItem("dataList");
let parsedDataList=null;
main();
function main() {
    parsedDataList = JSON.parse(dataList);
    // console.log(parsedDataList);
    for (let i in parsedDataList) {
        insertNewData(parsedDataList[i]);
    }
}




function insertNewData(data) {
    const table = document.getElementById("user-table").getElementsByTagName("tbody")[0];
    // console.log(table);
    // console.log(data);
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.gender;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.religion;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.userName;
    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.password; 
    let cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)"> Edit </a>`;
    let cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onDelete(this)"> Delete </a>`;
}

function onEdit(td){
    let selectRow = td.parentElement.parentElement;       // select whole row
    // console.log(selectRow);
    let name = selectRow.cells[0].innerHTML;
    let email = selectRow.cells[1].innerHTML;
    let gender = selectRow.cells[2].innerHTML;
    let religion = selectRow.cells[3].innerHTML;
    let userName = selectRow.cells[4].innerHTML;
    let password = selectRow.cells[5].innerHTML;
    // console.log(name,email,gender,religion,userName,password);
    selectRow.cells[0].innerHTML = "<input type='text' id='editName' name='name' value="+name+" />";
    selectRow.cells[1].innerHTML = "<input type='email' id='editEmail' name='email' value="+email+" />";
    selectRow.cells[2].innerHTML = "<select id='editGender' name='gender' required><option value="+gender+">"+gender+"</option><option value='male'>male</option><option value='female'>female</option></select>";
    selectRow.cells[3].innerHTML = "<select id='editReligion' name='religion' required><option value="+religion+">"+religion+"</option><option value='hindu'>hindu</option><option value='muslim'>muslim</option><option value='christian'>christian</option></select>";
    selectRow.cells[4].innerHTML = "<input type='text' id='editUserName' name='userName' value="+userName+" />";
    selectRow.cells[5].innerHTML = "<input type='text' id='editPassword' name='password' value="+password+" />";
    selectRow.cells[6].innerHTML = `<a onClick="onUpdate(this)"> Update </a>`;
}

function onUpdate(td){
    let selectRow = td.parentElement.parentElement;
    // console.log(selectRow.cells[1].innerHTML);
    let email=document.getElementById("editEmail").value;
    for(let i in parsedDataList){
        if(parsedDataList[i].email==email){
            parsedDataList[i].name = document.getElementById("editName").value;
            parsedDataList[i].email = document.getElementById("editEmail").value;
            parsedDataList[i].gender = document.getElementById("editGender").value;
            parsedDataList[i].religion = document.getElementById("editReligion").value;
            parsedDataList[i].userName = document.getElementById("editUserName").value;
            parsedDataList[i].password = document.getElementById("editPassword").value;
        }
    }
    console.log(parsedDataList);
    localStorage.setItem("dataList",JSON.stringify(parsedDataList));
     window.location.href = "users.html"

}


    function onDelete(td){
        let selectRow = td.parentElement.parentElement;       // select whole row
        selectRow.parentElement.removeChild(selectRow);

        for(let i in parsedDataList){
            if(parsedDataList[i].email==selectRow.cells[1].innerHTML){
                parsedDataList.splice(i,1);
            }
        }

        localStorage.setItem("dataList",JSON.stringify(parsedDataList)); // after removing data pushing.
        // console.log(parsedDataList); 
    }








function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}