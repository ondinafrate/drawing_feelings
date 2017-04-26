// // Day 1 Outside
// var day1out = function(p){
//   p.setup = function(){
//     p.createCanvas(550, 450);
//     //p.background(127);
//     // p.stroke(51);
//     // p.triangle(90, 225, 174, 60, 258, 225);
//     // p.triangle(60, 150, 116, 40, 172, 150);
//     // p.triangle(30, 75, 58, 20, 86, 75);
//
//
//
//
//   drawTriangle(p, 50, 150, 100, 102, 51, 0);
//   drawTriangle(p, 100, 250, 150, 255, 0, 0);
//   drawTriangle(p, 200, 350, 150, 51, 204, 51);
//
//
//   };
//
//   p.draw = function(){
//     // p.clear();
//     // drawTriangle(p, 50, 150, 100, 102, 51, 0);
//     // drawTriangle(p, 100, 250, 150, 255, 0, 0);  + ((p.frameCount%50)/500.0)
//     // drawTriangle(p, 200, 350, 150, 51, 204, 51);
//   }
// }
//
// function drawTriangle(p, x1, y1, length, r, g, b){
//   var v1 = p.createVector(x1, y1, 0);
//   var v2 = p.createVector(x1+(length/2), y1-p.sqrt((length*length)-(length/2*length/2)), 0);
//   var v3anchor = p.createVector(x1 + length, y1, 0);
//   p.stroke(r,g,b);
//   p.noFill();
//   p.triangle(v1.x, v1.y, v2.x, v2.y, v3anchor.x, v3anchor.y);
//     for (var i = 0.1; i < 0.9 ; i+=0.1) {
//
//     var lerp1 = p5.Vector.lerp(v1, v3anchor, i);
//     var lerp2 = p5.Vector.lerp(v2, v3anchor, i);
//
//     p.line(lerp1.x, lerp1.y, lerp2.x, lerp2.y);
//   }
//
// }
// //
// // // Day 1 Inside
// var day1in = function( p ) {
//   p.setup = function() {
//     p.createCanvas(550, 450);
//     //p.background(127);
//     // p.ellipse(56, 46, 55, 55);
//     // p.ellipse(156, 146, 155, 155);
//     // p.ellipse(400, 200, 205, 205);
//     p.stroke(255, 0, 0);
//     // p.ellipse(400, 200, 180, 180);
//     // p.ellipse(400, 200, 155, 155);
//
//     // var flowerRings = 10;
//     // for(var i = 0; i < flowerRings; i++){
//     //   p.stroke(255, 0, 0);
//     //   p.noFill();
//     //   p.ellipse(200, 400, 200 - (i*(200/flowerRings)), 200 - (i*(200/flowerRings)));
//     // }
//
//     drawFlower(p, 250, 300, 10, 150, 0, 102, 255);
//     drawFlower(p, 60, 390, 8, 70, 51, 204, 51);
//     drawFlower(p, 450, 180, 14, 180, 255, 0, 0);
//
//   };
//
//   p.draw = function() {
// }
// }
//
// function drawFlower(p, x, y, flowerRings, flowerD, r, g, b){
//     for(var i = 0; i < flowerRings; i++){
//       p.stroke(r, g, b);
//       p.noFill();
//       p.ellipse(x, y, flowerD - (i*(flowerD/flowerRings)), flowerD - (i*(flowerD/flowerRings)));
//       //p.ellipse(x, y, flowerD - (i*(flowerD/flowerRings)), flowerD - (i*(flowerD/flowerRings)));
//     }
//     p.line(x, y, x, p.height);
// }
//
// // function drawFlower()
// var myp5 = new p5(day1out, 'c1out');
// var myp5 = new p5(day1in, 'c1in');
