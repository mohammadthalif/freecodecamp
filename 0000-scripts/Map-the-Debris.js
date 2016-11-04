function calcOP(avgAlt){
  /* Formula orbitalPeriod = 2 * Pi * (rootof((a * a * a)/GM))
  Where a = earthRadius + avgAlt
  */
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a3 = Math.pow(earthRadius + avgAlt, 3);
  var pi = 3.14159265;
  var op = 2 * pi * Math.sqrt(a3/GM);

  return Math.round(op);
}
function orbitalPeriod(arr) {
  var out = [];
  console.log(arr.length);
  for(var i = 0; i < arr.length; i++){
    var op = calcOP(arr[i].avgAlt);
    console.log(arr[i].name + '-'+ arr[i].avgAlt + '-' + op);
    var obj = {};
    obj.name = arr[i].name;
    obj.orbitalPeriod = op;
    out.push(obj);

  }
  console.log(out);
  return out;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
