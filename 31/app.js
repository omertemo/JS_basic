max_of_three = function (param1, param2, param3) {
  max_value = 0;
  if (param1 > param2) {
    max_value = param1;
  }
  max_value = param2;
  if (param3 > max_value) {
    max_value = param3;
  }
  return max_value;
};

console.log(max_of_three(55, 9845, 945));
console.log(max_of_three(654, 9845, 484818));
console.log(max_of_three(5, 6, 7));
console.log(max_of_three(101, 99, 56));
console.log(max_of_three(-101, -99, -56));
