function posNeg(n,m){
  return( n < 0 &&  m>0 || m < 0 && n > 0)
}

console.log(posNeg(10,-10))
console.log(posNeg(-10,-10))
console.log(posNeg(10,10))
console.log(posNeg(-10,10))

// Sayılardan biri negatifken diğeri pozitifken true üretir