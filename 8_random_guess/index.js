var randInt = Math.floor(Math.random() * 10) + 1;
console.log(randInt);

function myFunction() {
  var guess = document.getElementById("guessInt").value;
  var b = parseInt(guess);
  console.log(guess);
  if (guess == randInt) {
    document.getElementById("result").innerHTML = "Good Work";
  } else {
    document.getElementById("result").innerHTML = "Try Again";
  }
}
