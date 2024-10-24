let bgColor = document.querySelector('#bgColor');
let shape = document.querySelector('#shape');
let btn = document.querySelectorAll("button");

// for generating different color
btn[0].addEventListener("click", changeColor);

function generateColor(){
    let color = Math.floor(Math.random() * 255)
    return color;
}

function changeColor() {
let newColor = `rgb(${generateColor()}, ${generateColor()},${generateColor()})`;
bgColor.style.backgroundColor = newColor;
}

// for Generate Differnt Shape
btn[1].addEventListener("click",changeShape);
let arr = ["shape", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg","xyz","abc"]

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
    
}

function changeShape(){
let shapeId = randomShape();
shape.id = shapeId;
console.log(shape.id);
}