var person = /** @class */ (function () {
    function person(fName, age) {
        this.fName = fName;
        this.age = age;
        this.getAge();
    }
    person.prototype.getAge = function () {
        console.log("get age" + this.age);
        return 4;
    };
    return person;
}());
var p1 = new person("java", 20);
