function checkFirstTwo(str) {
  if (str.slice(0, 2) === "Py") {
    return str;
  }

  return "Py" + str;
}

console.log(checkFirstTwo("Pythons"));
console.log(checkFirstTwo("thons"));
console.log(checkFirstTwo("Fayton"));

// Substring ile de bakabiliyoruz buna
