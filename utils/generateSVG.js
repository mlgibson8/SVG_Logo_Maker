// 

const shapes = require('../lib/shapes');
const circle = require('../lib/circle');
const square = require('../lib/square');
const triangle = require('../lib/triangle');


const generateSVG = (data) => {
    let newString = ''
    const newShape = new shapes
    newString = newShape.render();
      switch(data.logoShape) {
        case 'circle':
            const newCircle = new circle(data.logoShapeColor)
            newString +=`n ${newCircle.render()}\n ${newCircle.renderBottom()}`
            break;
        case 'square':
            const newSquare = new square(data.logoShapeColor)
            newString +=`n ${newSquare.render()}\n ${newSquare.renderBottom()}`
            break;
        case 'triangle':
            const newTriangle = new triangle(data.logoShapeColor)
            newString +=`n ${newTriangle.render()}\n ${newTriangle.renderBottom()}`
            break;
      }
        return newString;}
module.exports = generateSVG;