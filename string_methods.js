// let str1 = "Hello World";
// console.log(str1.charAt(0)); // 'H'
//
// console.log(str1.charCodeAt(0)); // 104
//
// console.log(str1.charCodeAt(5)); // 44
//
//
// let str1 = "H";
// let str2 = "ello";
// let strValue = str1 + str2;
//
// let starValue = str1.concat(str2);
// console.log(starValue);
//
// let mystr = "www.ijse.lk";
// mystr.startsWith("www"); // true
// mystr.startsWith("https"); // false
//
// mystr.endsWith("com"); // false
// mystr.endsWith("lk"); // true
//
// let newStr1 = Hello;
// let newStr2 = Hello;
// let newStr3 = Hii;
//
// newStr1.localeCompare(newStr2); // 0
// newStr1.localeCompare(newStr3); // -1
// Mekedi Capital akuru wdinm compare krddi en agy wdiyi.
//     ex:- HII , Hello gththm HII wlin en agy wdi.

let mystr = "A,B,C,D,E,F";
mystr = mystr.replace(",","/");
console.log(mystr); // A/B,C,D,E,F
mystr = mystr.replaceAll(",","/");
console.log(mystr); // A/B/C/D/E/F


mystr = "hello, World";
mystr.search("World"); // 7(index of word starting with)
mystr.search("kk"); // 0 (not found)

