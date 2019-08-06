import { rotateShape } from './rotateShape'

const drawCircle = (context, shape) => {
    context.beginPath();
    context.arc(shape.x, shape.y, shape.side, 0, Math.PI * 2);
    if (shape.isSelected > 0 ) {
        // draw a bar line for circle, incase it rotates
        context.moveTo(shape.x,shape.y-shape.side);
        context.lineTo(shape.x,shape.y-shape.side-shape.side/5);
        if (shape.isRotated !== 0) {
            context.save();
            context.translate(shape.x, shape.y);
            context.rotate(rotateShape(shape));
            context.translate(-shape.x, -shape.y);
            context.beginPath();
            context.arc(shape.x, shape.y, shape.side, 0, Math.PI * 2);
            context.moveTo(shape.x,shape.y-shape.side);
            context.lineTo(shape.x,shape.y-shape.side-shape.side/5);
            context.restore();
        }
        context.fillStyle = 'red';
        context.strokeStyle = 'red';
    } else if (shape.isSelected === 0 && shape.isRotated!==0) {
        context.save();
        context.translate(shape.x, shape.y);
        context.rotate(rotateShape(shape));
        context.translate(-shape.x, -shape.y);
        context.beginPath();
        context.arc(shape.x, shape.y, shape.side, 0, Math.PI * 2);
        context.restore();
        context.fillStyle = 'black';
        context.strokeStyle = 'black';
        if (shape.isHovered) {
            context.fillStyle = 'grey';
            context.strokeStyle = 'grey';
        }
    } else if (shape.isHovered) {
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

export { drawCircle }