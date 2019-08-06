const Shape = class {
    constructor(x, y, side, kind) {
        this.x = x;
        this.y = y;
        this.side = side;
        this.kind = kind;
        this.isHovered= false;
        this.isSelected = 0;
        this.isRotated = 0;
        this.isDragging = false;
        this.isKilled = false;
    }
};
export { Shape }