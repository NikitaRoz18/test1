"use strict"
function Add(...args) {
    if (typeof str1 === "string" && typeof str2 === "string") {
        let con = str1.concat(str2);
        console.log(con);
    } else if (typeof num1 === "number" && typeof num2 === "number") {
        let add = num1 + num2;
        console.log(add);
    } else {
        console.log("error");
    }
}

Add("abcdef", "ghijk", 12345, 6789);
