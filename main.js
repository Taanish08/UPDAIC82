Canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


canvas.addEventListener("mousedown",myMousedown);
 function myMousedown (e) {
    
 var wido=document.getElementById("width").value;
var rads=document.getElementById("radius").value;
var cole=document.getElementById("color").value;
mouseEvent="mousedown";

}

canvas.addEventListener("mouseleave",myMouseleave);
 function myMouseleave (e) {

mouseEvent="mouseleave";

}

canvas.addEventListener("mouseup",myMouseup);
 function myMouseup (e) {

mouseEvent="mouseup";

}

canvas.addEventListener("mousemove",myMousemove);
 function myMousedown (e) {

current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
current_position_of_mouse_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown") {
    console.log("Current position of x and y coordinates =")
    console.log("x =" + current_position_of_mouse_x + "y =" +
    current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle=cols;
    ctx.lineWidth=wido;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,rads, 0, 2*Math.PI);
    ctx.stroke();
}

}