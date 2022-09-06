deneme = function(paramArray){
	for(i=0;i<paramArray.length;i++){
		if(paramArray[i] < 100 && paramArray[i]>50){
			return true
		}
	}
	return false
}

console.log(deneme([55,64,9845]))
console.log(deneme([5555,654,9845]))
console.log(deneme([5,6,5]))
console.log(deneme([50,100,99]))
