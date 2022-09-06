function deneme(str) {
  if (str.length >= 4) {
    front = str.slice(0,4);
    if(front == "Java"){
    	return true
    }
    return false
  }
}

console.log(deneme("a"));
console.log(deneme("TEHLİKE"));
console.log(deneme("Mahmut"));
console.log(deneme("Kelime"));
console.log(deneme("Türkiye"));
console.log(deneme("JavaScript"));


