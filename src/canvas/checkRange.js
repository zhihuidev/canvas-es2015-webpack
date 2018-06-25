const checkRange = (clickX,clickY, shape) => {
  let focusShape;
  if(shape.kind === 'circle' || shape.kind === 'star') {
      let distanceFromCenter = Math.sqrt(Math.pow(shape.x-clickX, 2) + Math.pow(shape.y-clickY, 2))
      focusShape = distanceFromCenter <= shape.side?true:false;
  }
  if(shape.kind === 'square') {
      let distanceFromCenter = Math.sqrt(Math.pow(shape.x-clickX, 2) + Math.pow(shape.y-clickY, 2))
      focusShape = distanceFromCenter <= shape.side/(2*Math.cos(Math.PI/4))?true:false;
  }
  if(shape.kind === 'triangle') {
      let distanceFromCenter = Math.sqrt(Math.pow(shape.x-clickX, 2) + Math.pow(shape.y-clickY, 2))
      focusShape = distanceFromCenter <= shape.side/(2*Math.cos(Math.PI/6))?true:false;
  }
  return focusShape;
}

export {checkRange}
