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
    cell7.innerHTML = `<a onClick="onDelete(this)"> Edit </a>`;
    let cell8 = newRow.insertCell(7);
    cell8.innerHTML = `<a onClick="onDelete(this)"> Delete </a>`;
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