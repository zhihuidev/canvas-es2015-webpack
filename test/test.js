import chai from 'chai'
import { Shape, checkRange, scrollShape } from '../src/canvas'
import { rotateShape } from '../src/canvas/rotateShape'

let expect = chai.expect
let should = chai.should()

describe('Test the behavior of check mouse range', function () {
    let circle_sample = new Shape(522, 290, 50,'circle');
    let square_sample = new Shape(387, 290, 100,'square');
    let triangle_sample = new Shape(97, 308, 100,'triangle');
    let star_sample = new Shape(241, 300, 50,'star');
    it('check mouse range should be true when given mouseX:520 and mouseY:280 with a shape:circle_sample', function () {
        expect(checkRange(520, 280, circle_sample)).to.be.equal(true)
    })
    it('check mouse range should not be true when given mouseX:620 and mouseY:280 with a shape:circle_sample', function () {
        checkRange(620, 280, circle_sample).should.not.be.equal(true)
    })
    it('check mouse range should be true when given mouseX:340 and mouseY:300 with a shape:square_sample', function () {
        expect(checkRange(340, 300, square_sample)).to.be.equal(true)
    })
    it('check mouse range should not be true when given mouseX:300 and mouseY:200 with a shape:square_sample', function () {
        checkRange(300, 200, square_sample).should.not.be.equal(true)
    })
    it('check mouse range should be true when given mouseX:96 and mouseY:280 with a shape:triangle_sample', function () {
        expect(checkRange(96, 280, triangle_sample)).to.be.equal(true)
    })
    it('check mouse range should not be true when given mouseX:86 and mouseY:225 with a shape:triangle_sample', function () {
        checkRange(86, 225, triangle_sample).should.not.be.equal(true)
    })
    it('check mouse range should be true when given mouseX:220 and mouseY:320 with a shape:star_sample', function () {
        expect(checkRange(220, 320, star_sample)).to.be.equal(true)
    })
    it('check mouse range should not be true when given mouseX:295 and mouseY:315 with a shape:star_sample', function () {
        checkRange(295, 315, star_sample).should.not.be.equal(true)
    })
})

describe('Test the behavior of rotate shape angle', function () {
    let circle_sample = new Shape(522, 290, 50,'circle');
    let square_sample = new Shape(387, 290, 100,'square');
    let triangle_sample = new Shape(97, 308, 100,'triangle');
    let star_sample = new Shape(241, 300, 50,'star');
    circle_sample.isRotated = 3;
    square_sample.isRotated = 4;
    triangle_sample.isRotated = 1;
    star_sample.isRotated = 2;
    it('rotate angle should be PI/2 when given rotate 3 times', function () {
        expect(rotateShape(circle_sample)).to.be.closeTo(Math.PI/2, 0.001)
    })
    it('rotate angle should not be PI when given rotate 4 times', function () {
        rotateShape(square_sample).should.not.be.closeTo(Math.PI, 0.001)
    })
    it('rotate angle should be PI/6 when given rotate 1 time', function () {
        expect(rotateShape(triangle_sample)).to.be.closeTo(Math.PI/6, 0.001)
    })
    it('rotate angle should not be PI/4 when given rotate 2 times', function () {
        rotateShape(star_sample).should.not.be.closeTo(Math.PI/4, 0.001)
    })
})

describe('Test the behavior of scroll mouse on shape for scale and rotate', function () {
    let circle_sample = new Shape(522, 290, 50,'circle');
    let square_sample = new Shape(387, 290, 100,'square');
    let triangle_sample = new Shape(97, 308, 100,'triangle');
    let star_sample = new Shape(241, 300, 50,'star');
    const scrollMouse = {
        "up":50,
        "down":-50
    }

    circle_sample.isSelected = 1;
    let circle_sample_original_side = circle_sample.side;
    scrollShape(circle_sample,scrollMouse['up']);
    it('shape should be scaled 1.1 when selected and after scroll mouse up once', function () {
        expect(circle_sample.side).to.be.equal(circle_sample_original_side*1.1)
    })

    square_sample.isSelected = 1;
    let square_sample_side = square_sample.side;
    scrollShape(square_sample,scrollMouse['down']);
    it('shape should be scaled 0.9 when selected and after scroll mouse up once', function () {
        expect(square_sample.side).to.be.equal(square_sample_side*0.9)
    })

    triangle_sample.isSelected = 2;
    let triangle_sample_original_rotate = triangle_sample.isRotated;
    scrollShape(triangle_sample, scrollMouse['up']);
    it('shape should rotated +1 when double clicked and after scroll mouse up once', function () {
        expect(triangle_sample.isRotated).to.be.equal(triangle_sample_original_rotate + 1)
    })

    star_sample.isSelected = 2;
    let star_sample_original_rotate = star_sample.isRotated;
    scrollShape(star_sample, scrollMouse['down']);
    it('shape should rotated -1 when double clicked and after scroll mouse down once', function () {
        expect(star_sample.isRotated).to.be.equal(star_sample_original_rotate - 1)
    })
})

