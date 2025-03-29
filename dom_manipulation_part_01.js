/**

 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 document = DOM
    document.getElementsBytagName(h1");

    var h1_elements = document.getElementsByTagName("h1");
    h1_elements[0] or console.log(h1_elements[0]);
        Output -->   <h1>Welcome to Javascript 01</h1>

    var h1_elements = document.getElementsByTagName("h1");
    h1_elements[1] or console.log(h1_elements[1]);
        Output -->   <h1>Welcome to Javascript 02</h1>

    console.log(h1_elements[0].innerText);
        Output -->   Welcome to Javascript 01

    h1_elements[0].innerText = "Hello IJSE"
        Output -->   Welcome to Javascript 01 becomes Hello IJSE

    h1_elements[0].innerHTML = "<h2>Hello</h2>"
        Output --> Hello (This represent it as a h2 HTML element)

 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    var subject1 = document.getElementById("subject1");
    console.log(subject1);
        Output -->  <div id="subject1">Let's learn HTML</div>

    document.getElementById("subject100");
        Output --> null (No such id)

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    document.getElementsByClassName("mySubject")[1];
         Output --> <div id="subject2" class="mySubject">Let's learn CSS</div>

    document.getElementsByClassName("mySubject")[2];
        Output --> <div id="subject3" class="mySubject">Let's learn Javascript</div>

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 document.querySelector("h6>p");
    Output -->  <p>P1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, velit?</p>

 Query selector hmthissem select krl denne ek element ekk withrai.
 Element godk thiyenwnm denne 1 weni ek.
 Apit adl element serm awshyn apit querySelectorAll(h6>p) use krnn wenw.

 let query_list = document.querySelectorAll("h6>p");
 console.log(query_list[0])
    Output -->  <p>P1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, velit?</p>

 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    Javascript use krl runtime adl elements wl content ek wens krn apit puluwm.

 */

var h1_elements = document.getElementsByTagName("h1");
console.log(h1_elements[0]);
console.log(h1_elements[0].innerText);
h1_elements[0].innerText = "Hello IJSE"
h1_elements[0].innerHTML = "<h2>Hello</h2>"

var subject1 = document.getElementById("subject1");
console.log(subject1);

var subject2 = document.getElementById("subject2");
console.log(subject2);

var subject3 = document.getElementById("subject3");
console.log(subject3);

var subject_elements = document.getElementsByClassName("mySubject");
subject_elements[0].innerText= "JS Bro";
subject_elements[0].innerHTML= "<i>JS Bro</i>";

var sub_names = document.getElementsByName("sub");
console.log(sub_names[0]);
console.log(sub_names[0].innerText);
console.log(sub_names[0].innerHTML);
sub_names[0].innerText = "Typescript";

document.querySelector("h6>p");
let query_list = document.querySelectorAll("h6>p");
console.log(query_list[0])