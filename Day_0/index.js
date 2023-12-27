"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function registerUser(name, birthYear) {
    var ifage = checkAge(birthYear);
    if (ifage) {
        console.log(name + ' has been registered');
    }
    else {
        console.log(name + ' Registraion failed!');
    }
}
function checkAge(birthYear) {
    var age = 2023 - birthYear;
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
registerUser('Edwin', 2003);
