function rotate(p, theta){


}


var points = [10,10,20,20,10,20,10,10];

ctx.save();
citx.beginPath();
for(var i = 0; i < points.length; i+=2){
  if(i===0){
    ctx.moveTo(points[i],points[i+1])
  } else {
    ctx.lineTo(points[i], points[i+1])
  }
}
ctx.stroke();
ctx.restore();

function hasPoint(p, ox, x, y){
  var c = false;
  for(var i = 0; j = p.length; i < len; i += 2){
  var px1 = p[i] + ox;
  var px2 = p[j] + ox;
  var py1 = p[i+1] + oy;
  var py2 = p[j+1] + oy;

if((py1 > y != py2 > y) && (x < (px2-px1)*(y-py1)/(py2-py1)+ px1)){

    c = !c;
  }
  j = i;
}
return c;
}


function rotate(p, theta){
  var c = Math.cos(theta)
  var s = Math.sin(theta);

  for (var i = 0; i < p.length; i += 2){
    var _x = p[i];
    var _y = p[i+1];

    p[i] = _x * c + _y * s;
    p[i+1] = _x * s + _y * c;

  }
}
