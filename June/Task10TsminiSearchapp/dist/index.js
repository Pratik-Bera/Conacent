"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let search = document.getElementById("user");
let formSubmit = document.getElementById("form");
let mainContainer = document.getElementById("mainContainer");
function fetcher(url, options) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        console.log(response);
        if (!response.ok) {
            console.error("Network Responce was not ok - status: " + response.status);
        }
        console.log(response);
        let data = response.json();
        console.log(data);
        return data;
    });
}
function fetchUserData(url) {
    let data = fetcher(url);
    console.log(data);
}
fetchUserData("https://api.github.com/users");
