console.log("this is ineterface tutorial");
var data = {
    fName: "Pratik",
    lName: "Bera",
    age: 20,
    gender: "male",
    address: "123 Main St"
};
var dataPrinter = function (data) {
    console.log(data.fName);
    console.log(data.lName);
    console.log(data.age);
    console.log(data.gender);
    console.log(data.address);
};
dataPrinter(data);
