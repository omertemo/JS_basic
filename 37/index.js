// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.  

const myFunc = (girdi) => {
  if(girdi.length < 3) {
    return girdi.toLocaleUpperCase();
  }
  let firstThreeChars = girdi.substring(0, 3);
  firstThreeChars = firstThreeChars.toLocaleLowerCase();
  return firstThreeChars + girdi.substring(3,girdi.length)
}

console.log(myFunc("de"))