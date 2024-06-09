let dataList = localStorage.getItem("dataList");
main();
function main() {
    let parsedDataList = JSON.parse(dataList);
    // console.log(parsedDataList);
    for (let i in parsedDataList) {
        insertNewData(parsedDataList[i]);
    }
}




function insertNewData(data) {
    const table = document.getElementById("user-list").getElementsByTagName("tbody")[0];
    // console.log(table);
    // console.log(data);
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
}