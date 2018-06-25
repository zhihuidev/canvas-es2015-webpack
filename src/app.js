import { css } from './stylesheet.css'
import { Shape, drawCircle, drawSquare, drawTriangle, drawStar, checkRange, scrollShape } from './canvas'

let canvas;
let context;
let previousHovered;
let previousSelected;
let storage = window.localStorage;
// init canvas with 4 shapes
let shapes = storage.getItem('shapes').length>2?JSON.parse(storage.getItem('shapes')):[
    new Shape(522, 290, 50,'circle'),
    new Shape(387, 290, 100,'square'),
    new Shape(97, 308, 100,'triangle'),
    new Shape(241, 300, 50,'star')
];

window.onload = () => {
    window.addShape= addShape;
    window.clearCanvas = clearCanvas;
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.onmousedown = canvasClick;
    canvas.onmouseup = stopDragging;
    canvas.onmouseout = stopDragging;
    canvas.onmousemove = mouseMove;
    canvas.ondblclick = canvasdbClick;
    canvas.addEventListener('keydown', doKeyDown, true);  
    canvas.focus();    
    // key event
    window.addEventListener('keydown', doKeyDown, true);
    // mouse scroll
    canvas.addEventListener('DOMMouseScroll',handleScroll,false);
    canvas.addEventListener('mousewheel',handleScroll,false);
    unselectshape();
    drawShapes(shapes);
}
// clean the selected shape
const unselectshape = () => {
    let u_shapes = [];
    let shapes_json = storage.getItem('shapes').length>2?JSON.parse(storage.getItem('shapes')):shapes;
    for (let i = 0; i < shapes_json.length; i++) {
        let shape = shapes_json[i];
        if (shape.isSelected > 0) shape.isSelected = 0;
        u_shapes.push(shape);
    }
    let s = JSON.stringify(u_shapes);
    storage.setItem('shapes',s);
    shapes = storage.getItem('shapes').length>2?JSON.parse(storage.getItem('shapes')):[];
}
// add shape randomly on canvas
const randomFromTo = (from, to) => {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
// add shape
const addShape = (kind, side, x, y) => {
    x = x || randomFromTo(0, canvas.width);
    y = y || randomFromTo(0, canvas.height);
    let shape = new Shape(x, y, side, kind);
    shapes.push(shape);
    drawShapes(shapes);
}
// clean canvas
const clearCanvas = () => {
    shapes = [];
    previousSelected = null;
    drawShapes(shapes);
}

const drawSwitch = {
    'circle': drawCircle,
    'square': drawSquare,
    'triangle': drawTriangle,
    'star': drawStar,
}
// draw shapes
const drawShapes = (shapes) => {
    let s = JSON.stringify(shapes);
    storage.setItem('shapes',s);
    let shapes_json = JSON.parse(storage.getItem('shapes'));
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < shapes_json.length; i++) {
        let shape = shapes_json[i];
        // draw shape
        context.globalAlpha = 0.85;
        if(!shape.isKilled) drawSwitch[shape.kind](context, shape);
    }
}
// double click event handle
const canvasdbClick = (e) => {
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;
    for (let i = shapes.length - 1; i >= 0; i--) {
        let shape = shapes[i];
        let selectShape = checkRange(clickX, clickY, shape);
        if (selectShape) {
            if (previousSelected) {
                previousSelected.isSelected = 0;
                previousSelected.isDragging = false;
            }
            previousSelected = shape;
            shape.isSelected = 2;
            shape.isDragging = true;
            drawShapes(shapes);
            break;
        }
        // unselecet
        if (previousSelected) previousSelected.isSelected = 0;
        drawShapes(shapes);
    }
}
// click event handle
const canvasClick = (e) => {
    let clickX = e.pageX - canvas.offsetLeft;
    let clickY = e.pageY - canvas.offsetTop;
    for (let i = shapes.length - 1; i >= 0; i--) {
        let shape = shapes[i];
        let selectShape = checkRange(clickX, clickY, shape);
        if (selectShape) {
            if (previousSelected) {
                previousSelected.isSelected = 0;
                previousSelected.isDragging = false;
            }
            previousSelected = shape;
            shape.isSelected = 1;
            shape.isDragging = true;
            drawShapes(shapes);
            break;
        }
        // unselecet
        if (previousSelected) previousSelected.isSelected = 0;
        drawShapes(shapes);
    }
}
// key event handle
const doKeyDown = (e) => {
    let keyID = e.keyCode ? e.keyCode :e.which;
    // key 'k': kill one shape
    if(keyID === 75)  {
        if (previousSelected) previousSelected.isKilled = true;
        drawShapes(shapes);
    }
    // key up arrow
    if(keyID === 38)  {
        if (previousSelected) previousSelected.side = 1.1*previousSelected.side ;
        drawShapes(shapes);
    }
    // key down arrow
    if(keyID === 40)  {
        if (previousSelected) previousSelected.side = 0.9*previousSelected.side ;
        drawShapes(shapes);
    }
    // key 'w'
    if(keyID === 87)  {
        if (previousSelected) previousSelected.isRotated += 1;
        drawShapes(shapes);
    }
    // key 's'
    if(keyID === 83)  {
        if (previousSelected) previousSelected.isRotated += -1;
        drawShapes(shapes);
    }
}
// scroll event handle
const handleScroll = (e) => {
    let delta = e.wheelDelta ? e.wheelDelta/50 : 0;
    scrollShape(previousSelected, delta);
    drawShapes(shapes);
}

const stopDragging = () => {
    if (previousSelected) previousSelected.isDragging = false;
}
// move mouse event handle
const mouseMove = (e) => {
    if (previousSelected && previousSelected.isDragging === true) {
        let x = e.pageX - canvas.offsetLeft;
        let y = e.pageY - canvas.offsetTop;
        previousSelected.x = x;
        previousSelected.y = y;
        // kill the shape when drag out of the canvas top
        if(y<20) previousSelected.isKilled = true;
        drawShapes(shapes);
    } else if(!previousSelected || previousSelected.isDragging !== true) {
        let clickX = e.pageX - canvas.offsetLeft;
        let clickY = e.pageY - canvas.offsetTop;
        for (let i = shapes.length - 1; i >= 0; i--) {
            let shape = shapes[i];
            let hoverShape = checkRange(clickX, clickY, shape);
            if (hoverShape) {
                if (previousHovered) previousHovered.isHovered = false;
                previousHovered = shape;
                shape.isHovered = true;
                drawShapes(shapes);
                break;
            } else {
                if (previousHovered) previousHovered.isHovered = false;
                drawShapes(shapes);
            }
        }
    }
}
