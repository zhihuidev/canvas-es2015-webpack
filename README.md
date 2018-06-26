# Canvas-es2015-webpack project

Drawing and transforming 4 shapes(Circle, Square, Triangle, Star) on HTML5 canvas.

## Getting Started

1. run $ npm install
2. run $ ./node_modules/.bin/webpack
3. then browse in Chrome with path/to/dist/index.html

#### Functions:
* Click one shape to select
* Cilck space area in canvas to unselect
* When selected a shape, scroll mouse(up and down) to scale shape; drag the shape to anywhere on canvas area; drag to the top area for deleting the shape
* Double click one shape to enable rotate, scroll mouse(up and down) to rotate shape.
* Add a shape(circle, triangle, square, star) randomly to the canvas area
* Clean canvas
* Run $ npm clean, delete everthing in the dist folder
* Canvas Start Screenshot:
* ![Canvas Start Screenshot](https://raw.githubusercontent.com/memmove/canvas-es2015-webpack/master/screenshots/Screen%20Shot%202018-06-26%20at%2011.54.31%20AM.png)
* Canvas drag, rotate, and scale Screenshot:
* ![Canvas drag, rotate, and scale Screenshot](https://raw.githubusercontent.com/memmove/canvas-es2015-webpack/master/screenshots/Screen%20Shot%202018-06-26%20at%2011.54.46%20AM.png)

### Prerequisites

The latest Google Chrome & npm

## Running the tests

* run $ npm test

## Deployment

* Upload the dist folder to server:
* path/to/dist/application.js
* path/to/dist/index.html

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


