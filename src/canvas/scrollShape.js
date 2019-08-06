const scrollShape = (shape, delta) => {
    if (delta>0) {
        if (shape.isSelected === 1) {
            shape.side = 1.1*shape.side ;
        } else if(shape.isSelected === 2) {
            shape.isRotated += 1;
        }
    } else if (delta<0) {
        if (shape.isSelected === 1) {
            shape.side = 0.9*shape.side ;
        } else if(shape.isSelected === 2) {
            shape.isRotated -= 1;
        }
    }
}

export { scrollShape }