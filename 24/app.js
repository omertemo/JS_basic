function addFirstToStartAndEnd(str) {
  if (str.length <= 1) {
    return str + str + str;
  }
  str = str[0] + str.slice(1, str.length) + str[0];
  return str;
}

console.log(addFirstToStartAndEnd("a"));
console.log(addFirstToStartAndEnd("TEHLİKE"));
