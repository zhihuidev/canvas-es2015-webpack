import { rotateShape } from './rotateShape'

const drawStar = (context, shape) => {
    context.beginPath();
    for (let j = 0; j < 5; j++) {   
        context.lineTo(Math.cos((18+j*72)/180*Math.PI)*shape.side+shape.x,   
                        -Math.sin((18+j*72)/180*Math.PI)*shape.side+shape.y);

        context.lineTo(Math.cos((54+j*72)/180*Math.PI)*shape.side*0.4+shape.x,   
                        -Math.sin((54+j*72)/180*Math.PI)*shape.side*0.4+shape.y); 
    }
    if (shape.isSelected) {
        if(shape.isRotated!==0) {
            context.save();
            context.translate(shape.x, shape.y);
            context.rotate(rotateShape(shape));
            context.translate(-shape.x, -shape.y);
            context.beginPath();
            for (let j = 0; j < 5; j++) {   
                context.lineTo(Math.cos((18+j*72)/180*Math.PI)*shape.side+shape.x,   
                                -Math.sin((18+j*72)/180*Math.PI)*shape.side+shape.y);

                context.lineTo(Math.cos((54+j*72)/180*Math.PI)*shape.side*0.4+shape.x,   
                                -Math.sin((54+j*72)/180*Math.PI)*shape.side*0.4+shape.y); 
            }
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
        for (let j = 0; j < 5; j++) {   
            context.lineTo(Math.cos((18+j*72)/180*Math.PI)*shape.side+shape.x,   
                            -Math.sin((18+j*72)/180*Math.PI)*shape.side+shape.y);

            context.lineTo(Math.cos((54+j*72)/180*Math.PI)*shape.side*0.4+shape.x,   
                            -Math.sin((54+j*72)/180*Math.PI)*shape.side*0.4+shape.y); 
        }
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

export {drawStar}