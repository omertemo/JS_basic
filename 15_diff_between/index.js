
function calculate() {
  var girdi = document.getElementById("number").value;
  console.log(typeof(girdi));
  if (girdi < 13) {
    result = 13 - girdi;

  } else {
    result = Math.abs(13-girdi)*2
  }
  document.getElementById("result").innerHTML = result;
}
