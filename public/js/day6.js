// Day 6 Outside

// Day 6 Inside
// var day6in = function( p ) { // p could be any variable name
//   p.setup = function() {
//     p.createCanvas(600, 600);
//     VF = Vex.Flow;
//
// // Create an SVG renderer and attach it to the DIV element named "boo".
// var div = document.getElementById("c6in")
// var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
//
// // Configure the rendering context.
// renderer.resize(600, 600);
// var context = renderer.getContext();
// context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
//
// // Create a stave of width 400 at position 10, 40 on the canvas.
// var stave = new VF.Stave(10, 40, 400);
//
// // Add a clef and time signature.
// stave.addClef("treble").addTimeSignature("4/4");
//
// // Connect it to the rendering context and draw!
// stave.setContext(context).draw();
//
// var notes = [
//   // A quarter-note C.
//   new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
//
//   // A quarter-note D.
//   new VF.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
//
//   // A quarter-note rest. Note that the key (b/4) specifies the vertical
//   // position of the rest.
//   new VF.StaveNote({clef: "treble", keys: ["b/4"], duration: "qr" }),
//
//   // A C-Major chord.
//   new VF.StaveNote({clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" })
// ];
//
// // Create a voice in 4/4 and add above notes
// var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
// voice.addTickables(notes);
//
// // var notes = [
// //     new VF.StaveNote({clef: "treble", keys: ["e##/5"], duration: "8d" }).
// //       addAccidental(0, new VF.Accidental("##")).addDotToAll(),
//
// //     new VF.StaveNote({clef: "treble", keys: ["eb/5"], duration: "16" }).
// //       addAccidental(0, new VF.Accidental("b")),
//
// //     new VF.StaveNote({clef: "treble", keys: ["d/5", "eb/4"], duration: "h" }).
// //         addDot(0),
//
// //     new VF.StaveNote({clef: "treble", keys: ["c/5", "eb/5", "g#/5"], duration: "q" }).
// //       addAccidental(1, new VF.Accidental("b")).
// //       addAccidental(2, new VF.Accidental("#")).addDotToAll()
// //   ];
//
// // VF.Formatter.FormatAndDraw(context, stave, notes);
//
// // Format and justify the notes to 400 pixels.
// var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
//
// // Render voice
// voice.draw(context, stave);
//
//
//   };
//
//   p.draw = function() {
//
// }
//
//
// }
//
// var myp5 = new p5(day6in, 'c6in');
//
//
//
