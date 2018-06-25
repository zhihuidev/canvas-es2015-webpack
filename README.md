# Canvas-es2015-webpack project

Drawing and transforming 4 shapes(Circle, Square, Triangle, Star) on HTML5 canvas.

## Getting Started

1. run $ npm install
2. run $ ./node_modules/.bin/webpack
3. then browse in Chrome with /dist/index.html

#### Functions:
* Click one shape to select
* Cilck space area to unselect
* When selected shape, scroll mouse to scale shape; drag the shape to anywhere on canvas; drag to the top for deleting the shape
* When double click shape, scroll mouse to rotate shape.
* Add a shape (circle, triangle, square, star) randomly to the canvas
* clean canvas

### Prerequisites

The latest Google Chrome & npm

## Running the tests

* run $ npm test

## Deployment

* Upload the dist folder to server:
* /dist/application.js
* /dist/index.html

## Built With

* HTML5 Canvas web api
* ES6
* webpack
* babel
* mocha and chai

## Technical overview

* All shapes (circles, triangles, squares, stars) are stored in an object array **shapes[]**, which generated from the **Shape** class.
* The draw calls were handled by canvas web api: **drawCircle(), drawSquare(), drawTriangle(), drawStar()**.
* The **shapes[]** objects were persisted with local storage.
* Unit testing cases were written for rotate, scale and check mouse range math functions.
* The rotate angle and scale ratio could be edited in: **rotateShape.js, scrollShape.js**.
* More unit tests could be added further.


