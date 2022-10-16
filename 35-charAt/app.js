// Write a JavaScript program to check a given string contains 2 to 4 numbers of a specified character.
// Veriilen String'de 2 veya 3 veya 4'üncü indisteki elemanların belirtilen karakterle eşleşip eşleşmediğini kontrol ediniz.

function myFunc(str1,char){
    if(str1.charAt(1) == char || str1.charAt(2) == char  || str1.charAt(3) == char){
        return true
    }
    return false
}

console.log(myFunc("Python", "y"));
console.log(myFunc("JavaScript", "a"));
console.log(myFunc("Console", "o"));
console.log(myFunc("Console", "C"));
console.log(myFunc("Console", "e"));
console.log(myFunc("JavaScript", "S"));

//charAt o array'in o indisteki karakterini döner