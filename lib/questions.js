// require colorKeywords array to check if input matches one of the accepted colors
const colorKeywords = require('./colorKeywords.js')

const questions = [
 // Logo text
    {
        name: 'text',
        message: 'What is the name of your logo? (must be 3 characters or less)',
        type: 'input',
        // makes sure the user enters a string of 3 characters or less
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },
// user choose text color
    {
        name: 'textColorChoice',
        message: 'What is the color of the text? (must be a color keyword or hexadecimal) ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
      {
        type: "input",
        name: "textColor",
        message: "Enter the text color keyword",
        // makes sure the user enters a valid color keyword, if not you get an undefined error
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
     {
        type: "input",
        name: "textColor",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        // makes sure the user enters a valid hexadecimal, if not you get an undefined error
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

// pick a shape
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },
// shape color
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
        {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape color keyword",
        // makes sure the user enters a valid color keyword, if not you get an undefined error
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
       {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        // makes sure the user enters a valid hexadecimal, if not you get an undefined error
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },


   
];

module.exports = questions;