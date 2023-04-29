cosnt inquirer = require ('inquirer');
const { default: inquirer } = require('inquirer');
const generateSVG = require('./utils.generateSVG');
const fs = require('fs');

// array of questions for user
// number of characters must be less than 3
const questions = [
    {
        type: 'input',
        message: 'Enter your logo text, it must be less than 3 characters',
        name: 'logoText',
        validate: function (value) {    
            if (value.length > 3) {
                return 'Please enter less than 3 characters';
            } else {
            return true;
        }
    } },
// color of the logo text

    {
        type: 'input',
        message: 'Enter your logo text color with a color keyword (OR a hexadecimal number)',
        name: 'logoTextColor',
    },
// picking a shape for the logo
{
    type: 'list',
    message: 'Pick a shape for your logo',
    choices: ['circle', 'square', 'triangle'],
    name: 'logoShape',
},
{
    type: 'input',
    message: 'Enter your logo shape color with a color keyword (OR a hexadecimal number)',
    name: 'logoShapeColor',
},
]

// inquirer
inquirer.prompt(questions).then((data) => {
    fs.writeFile('./assets/logo.svg',generateSVG(data), (err) => {
        if(err){
            console.log(err);
        } else {
            console.log('Your logo has been generated!')
        }
})
});
       