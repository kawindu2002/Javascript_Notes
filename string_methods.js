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
// Mekedi Capital akuru wdinm compare krddi en agy wdiyi. (ASCII comparison)
//     ex:- HII , Hello gththm HII wlin en agy wdi.

/**
 * ASCII

 h - 104
 e - 101
 l - 108
 o - 111

 H - 72
 I- 73

 let s1 = "hello";
 undefined
 let s2 = "hello";
 undefined
 let s3 = "Hello";
 undefined
 let s4 = "HI";
 undefined
 s1.localeCompare(s2);
 0
 s1.localeCompare(s3);
 -1
 s3.localeCompare(s4);
 -1
 s4.localeCompare(s3);
 1
 */

let mystr = "A,B,C,D,E,F";
mystr = mystr.replace(",","/");
console.log(mystr); // A/B,C,D,E,F
mystr = mystr.replaceAll(",","/");
console.log(mystr); // A/B/C/D/E/F

mystr = "hello, World";
mystr.search("World"); // 7(index of word starting with)
mystr.search("kk"); // 0 (not found)

mystr = "hello, World";
mystr.slice(7,12); // World (from index 7 sit index 12 dkwa)

mystr = "apple,mango,orange,pineappple";
// Me string eke thiyen plthuru tik wen wenm arn array ekk athult dgnn on.

mystr.split(","); //['apple', 'mango', 'orange', 'pineappple']
mystr.split(""); //['a', 'p', 'p', 'l', 'e', ',', 'm', 'a', 'n', 'g', 'o', ',', 'o', 'r', 'a', 'n', 'g', 'e', '...

str = "hello, World";
str.substring(7); // World
str.substring(7,12); // World

// str = "hello, World!";
// 'hello, World!'

// str.substring(2); // Consider a range
// 'llo, World!'
// str.substring(2,4);
// 'll'
// str.substr(2,4); // Consider index and character count
// 'llo,'

let x = "hello";
x.toUpperCase();
'HELLO'

let y = 'HELLO';
x.toLowerCase();
'hello'


str = "hello, World!";
'hello, World!'
str.length
13

str = " hello, World! ";
' hello, World! '
str.trim()
'hello, World!'

