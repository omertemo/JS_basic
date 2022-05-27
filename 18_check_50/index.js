// function check_50(n,m){
//   if((n+m) === 50){
//     console.log(true);
//   }else if(n> 50 || m > 50){
//     console.log(true);

//   }else{
//     console.log(false);

//   }
// }

// check_50(58,1);
// check_50(35,15);
// check_50(24,6);
// check_50(1,54);
// check_50(25,25);

function test50(n,m){
  return (( n >= 50 || m >= 50) || (n+m === 50))
}


console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))