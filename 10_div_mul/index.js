function divide(){
    var number1 = document.getElementById("number_1").value;
    var number2 = document.getElementById("number_2").value;

    var result = number1 / number2;

    document.getElementById("result").innerHTML = result;
}

function multiply(){
    var number1 = document.getElementById("number_1").value;
    var number2 = document.getElementById("number_2").value;

    var result = number1 * number2;

    document.getElementById("result").innerHTML = result;
}