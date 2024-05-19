
class rectangle {
    constructor (_width, _height, _color){
        console.log("The rectangle is being created");

        this.width = _width;
        this.height = _height;
        this.color = _color;
    }
    getArea () {
        return this.width * this.height;
    }

    printDescription () {
        console.log(`I am a rectangle of ${this.width} x ${this.height} and I am also ${this.color}`)
    }
}

let myRectangle1 = new rectangle(3, 5, "blue");
let myRectangle2 = new rectangle(4, 10, "rose");

console.log(myRectangle1.getArea());
console.log(myRectangle2.getArea());
console.log(myRectangle2.getArea());
console.log(myRectangle2.printDescription());