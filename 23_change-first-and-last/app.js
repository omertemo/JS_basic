function changeFirstAndLast(str) {
  if (str.length <= 1) {
    return str;
  }
  str = str.slice(-1)[0] + str.slice(1, str.length) + str[0];
  return str;
}

console.log(changeFirstAndLast("a"));
console.log(changeFirstAndLast("TEHLİKE"));
