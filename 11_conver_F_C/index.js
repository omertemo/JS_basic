function fToC(){
    var fahre = document.getElementById("fahre").value;
    var result = (fahre - 32) * 5/9;
    document.getElementById("resultF").innerHTML = result
}
function cToF() {
    var celci = document.getElementById("celci").value;
    var result = (celci * 9 /5)+32;
    document.getElementById("resultC").innerHTML = result
}