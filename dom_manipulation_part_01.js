/**
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

    Javascript use krl runtime adl elements wl content ek wens krn apit puluwm.

 */

var h1_elements = document.getElementsByTagName("h1");
console.log(h1_elements[0]);
console.log(h1_elements[0].innerText);

