"use strict";
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["user"] = "user";
    Roles["guest"] = "guest";
})(Roles || (Roles = {}));
let user1 = {
    name: "Pratik",
    email: "pratik@gmail.com",
    role: Roles.admin
};
let user2 = {
    name: "Amit",
    email: "pratik@gmail.com",
    role: Roles.guest
};
let validation = (userData) => {
    if (userData.role === Roles.admin) {
        console.log(`you are a ${userData.role}. you can control the website`);
        return true;
    }
    else {
        console.log(`you are a ${userData.role}. you don't have the right to control the website`);
        return false;
    }
    ;
};
validation(user1);
