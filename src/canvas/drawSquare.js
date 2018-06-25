import { rotateShape } from './rotateShape'

const drawSquare = (context, shape) => {
    context.beginPath();
    context.moveTo(shape.x-shape.side/2,shape.y-shape.side/2);
    context.lineTo(shape.x+shape.side/2,shape.y-shape.side/2);
    context.lineTo(shape.x+shape.side/2,shape.y+shape.side/2);
    context.lineTo(shape.x-shape.side/2,shape.y+shape.side/2);
    if (shape.isSelected) {
        if(shape.isRotated!==0) {
            context.save();
            context.translate(shape.x, shape.y);
            context.rotate(rotateShape(shape));
            context.translate(-shape.x, -shape.y);
            context.beginPath();
            context.moveTo(shape.x-shape.side/2,shape.y-shape.side/2);
            context.lineTo(shape.x+shape.side/2,shape.y-shape.side/2);
            context.lineTo(shape.x+shape.side/2,shape.y+shape.side/2);
            context.lineTo(shape.x-shape.side/2,shape.y+shape.side/2);
            context.restore();
        }
        context.fillStyle = 'red';
        context.strokeStyle = 'red';
    } else if(shape.isSelected === 0 && shape.isRotated!==0) {
        context.save();
        context.translate(shape.x, shape.y);
        context.rotate(rotateShape(shape));
        context.translate(-shape.x, -shape.y);
        context.beginPath();
        context.moveTo(shape.x-shape.side/2,shape.y-shape.side/2);
        context.lineTo(shape.x+shape.side/2,shape.y-shape.side/2);
        context.lineTo(shape.x+shape.side/2,shape.y+shape.side/2);
        context.lineTo(shape.x-shape.side/2,shape.y+shape.side/2);
        context.restore();
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
        if(shape.isHovered) {
            context.fillStyle = 'grey';
            context.strokeStyle = 'grey';
        }
    } else if(shape.isHovered) {
        context.fillStyle = 'grey';
        context.strokeStyle = 'grey';
    } else {
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
    }
    context.lineWidth = 1;
    context.fill();
    context.stroke();
}

export {drawSquare}