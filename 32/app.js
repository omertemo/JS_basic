nearest = function (param1, param2) {
  x = Math.abs(100 - param1);
  y = Math.abs(100 - param2);
  if (x > y) {
    return param2;
  } else if (x == y) {
    console.log("equal");
    return;
  }
  return param1;
};

console.log(nearest(55, 9845));
console.log(nearest(654, 9845));
console.log(nearest(5, 6));
console.log(nearest(101, 99));
console.log(nearest(-101, -99));
