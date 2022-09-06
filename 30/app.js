function deneme(str) {
  strEnd = str.slice(4, 10);
  if (str.length >= 5) {
    if (strEnd == "script") {
      return true;
    }
    return false;
  }
  return false;
}

console.log(deneme("a"));
console.log(deneme("TEHLİKE"));
console.log(deneme("javascript"));
console.log(deneme("aaaascript"));
console.log(deneme("aaaaScriptaaaa"));
