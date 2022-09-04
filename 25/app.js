function checkMultiple(params) {
  if (params % 3 == 0 && params % 7 == 0) {
    console.log("7 ve 3'ün ortak katı");
    return;
  } else if (params % 7 == 0) {
    console.log("7'nin katı");
  } else if (params % 3 == 0) {
    console.log("3'ün katı");
  } else {
    console.log("Hiçbiri");
  }
}

console.log(checkMultiple(21));
console.log(checkMultiple(9));
console.log(checkMultiple(49));
console.log(checkMultiple(16));
