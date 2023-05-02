const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./assets/logo.svg";
const setShape = require('./lib/setShape.js')

// function to create svg file using inquirer
function generateSVG(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo!'));
}
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        generateSVG(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();