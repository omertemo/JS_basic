function deneme(str) {
  if (str.length <= 3) {
    return str + str + str;
  }
  back = str.substring(str.length-3);
  
  //str = str.slice(str.length-3,str.length) + str + str.slice(str.length-3,str.length)
  return back + str + back;
}

console.log(deneme("a"));
console.log(deneme("TEHLİKE"));
console.log(deneme("Mahmut"));
console.log(deneme("Kelime"));
console.log(deneme("Türkiye"));


