const userInfo = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "Hello I'm " + `${userInfo.id}` + " from " + `${userInfo.campus}` + " !",
    e : "^^",
    T : " U"
}));