var d =  new Date();

var dd = d.getDate();
var mm = d.getMonth() + 1;
var yyyy = d.getFullYear();

function dateForThis(){
    document.getElementById("dd").innerHTML = dd + " / "; 
    document.getElementById("mm").innerHTML = mm + " / ";
    document.getElementById("yyyy").innerHTML = yyyy;
}