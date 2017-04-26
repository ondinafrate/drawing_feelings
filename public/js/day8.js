//
// var day8out = function( p ) { // p could be any variable name
//   p.setup = function() {
//     p.createCanvas(550, 300);
//     p.drawVinyl(112, 92, 110, 24, 255, 0, 0);
//     p.drawVinyl(212, 92, 80, 16, 0, 255, 0);
//     p.drawVinyl(300, 92, 80, 16, 0, 0, 255);
//
//     p.fill(0);
//     p.noStroke();
//     // p.textSize(12);
//     // p.text("productive", 10, 30);
//
//     // p.drawVinyl(56, 46, 55, 12, 255, 0, 0);
//     // p.drawVinyl(106, 46, 40, 8, 0, 255, 0);
//     // p.drawVinyl(150, 46, 40, 8, 0, 0, 255);
//   };
//
//   p.draw = function() {
//
// }
//
// p.drawVinyl = function(x, y, outersize, innersize, innerR, innerG, innerB){
// 	p.noStroke();
// 	p.fill(0);
// 	p.ellipse(x, y, outersize, outersize);
// 	p.stroke(innerR,innerG,innerB);
// 	p.strokeWeight(innersize/2);
// 	p.noFill();
// 	p.ellipse(x, y, innersize, innersize);
// 	p.ellipse(x, y, innersize, innersize);
// }
// }
//
// var myp5 = new p5(day8out, 'c8out');
//
//
// var day8in = function( p ) {
//   var x = 100.0;
//   var y = 100;
//   var speed = 2.5;
//   p.setup = function() {
//     p.createCanvas(550, 450);
//   };
//
//   p.draw = function() {
//
//   };
// }
// var myp5 = new p5(day8in, 'c8in');
