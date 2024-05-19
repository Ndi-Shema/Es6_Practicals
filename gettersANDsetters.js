
class square {
    constructor (_width) {
        this.width = _width;
        this.height = _width;
    }

    get area () {
        return this.width * this.height;
    }
}

let square1 = new square(25);
console.log(square1.area);