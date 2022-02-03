const canvas = document.querySelector('#drawingCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const yellow = document.createElement('img');
const red = document.createElement('img');

yellow.src = 'images/ball1.png';
red.src = 'images/ball2.png';

let paintbrush = yellow;

const context = canvas.getContext('2d');

const handleMouseMove = (event) => {
    const left = event.clientX;
    const top = event.clientY;

    context.drawImage(paintbrush, left, top);
}

const handleClick = () => {
    if (paintbrush === yellow) {
        paintbrush = red;
    } else {
        paintbrush = yellow;
    }
}
  
canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('click', handleClick);
