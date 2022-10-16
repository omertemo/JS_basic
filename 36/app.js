// Verilen üç pozitif tamsayının son basamağının aynı olup olmadığını kontrol eden bir JavaScript programı yazın.

function myFunc(n1,n2,n3){
  const s1 = String(n1)
  const s2 = String(n2)
  const s3 = String(n3)

  if(s1>0 && s2>0 && s3>0){
    if(s1[s1.length-1] == s2[s2.length-1] && s1[s1.length-1] == s3[s3.length-1]){
      return true
    }
  }
  
  return false
}

function theirFunc(s1,s2,s3){

  if(s1>0 && s2>0 && s3>0){
    if(s1 % 10 == s2 % 10 && s1 % 10 == s3 % 10){
      return true
    }
  }
  return false
}


console.log(theirFunc(20, 30, 400));
console.log(theirFunc(20, 35, 400));
console.log(theirFunc(-20, 30, 400));
console.log(theirFunc(20, -30, 400));
console.log(theirFunc(20, 30, -400));