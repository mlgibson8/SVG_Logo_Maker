// making Shapes the parent class of circle, square, and triangle
// they share common properties and are in the shape class
// this is also the method to render the svg tag since it is shared by the shapes

class Shapes {
    cosntructor(text, textColor,shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render(){
        return `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">`
    }
}
module.exports = Shapes;