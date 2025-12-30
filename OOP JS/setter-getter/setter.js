class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
}

const rect=new Rectangle(-10000,"pi");
console.log(rect); // Rectangle { _width: -10000, _height: 'pi' }
