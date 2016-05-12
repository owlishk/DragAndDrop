//Javascript to control mousedown events to move shapes around. Shapes are given different z-indices to play with color and overlapping

//sources:
//http://javascript.info/tutorial/mouse-events#mousemove-and-mouseover-frequency
//http://weblog.west-wind.com/posts/2008/Oct/21/Making-Element-Position-Absolute-with-jQuery

//==========variables declaration==========

//need default shape to avoid "undefined"
var shape = $('#square');
var startPosition = shape.position();
var startPositionLeft = startPosition.left;
var startPositionTop = startPosition.top;
var newPositionLeft;
var newPositionTop;
var mousePositionLeft;
var mousePositionTop;
var newMousePositionLeft;
var newMousePositionTop;
var difLeft;
var difTop;


//================events==============

                          
$('.shape').on( 'mousedown', shapeGrab);
$('.shape').on( 'mousemove', shapeMove);

//shape.addEventListener("mousedown", ShapeMove);

//================functions============
//document.getElementById('ball').onmousedown = 


function shapeGrab( evt ) {
 
  //picking shape based on mousedown event
  shape = $(this).attr('id');
  mousePositionLeft = event.pageX;
  mousePositionTop = event.pageY;
  difLeft = mousePositionLeft - startPositionLeft;
  difTop = mousePositionTop - startPositionTop;

 
  console.log(shape);
  console.log(startPositionLeft);
  console.log(startPositionTop);

}
 
 function shapeMove( evt ){
  
  console.log(shape);
  //calculating offset relative to mouse
  newMousePositionLeft = event.pageX;
  newMousePositionTop = event.pageY;
  newPositionLeft = newMousePositionLeft - difLeft;
  newPositionTop = newMousePositionTop - difTop;
  
  var shapeID = "#" + shape;
  var shapeCLASS = "." + shape;
   console.log(shapeID);
  
  
//  A bunch of failed code below. Couldn't get the shapes to move
  
//  var position = $(shapeID).position();
//  console.log(position);
//  
//  position[0] = {top: newPositionTop, left: newPositionLeft};
  

  
//  $('shapeID').parent().css({position: "relative"});
//  $('shapeID').css({position: "absolute"})
//  
//  $('shapeID').offset({top:newPositionLeft,left:newPositionTop});
  
//  $('shapeID').css({"top": parseInt(newMousePositionTop), "left": parseInt(newMousePositionLeft), "position":"absolute"}); 
  
//  $('shapeID').position({
//  of: $('shapeID').parent(),
//  my: 'newPositionLeft newPositionTop',
//  at: 'left top'
//  });
  
 
 }