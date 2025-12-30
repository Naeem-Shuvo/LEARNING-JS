class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    //**this will set constraints 
    // "Setter must have exactly one formal parameter."*/
    set width(width) {
        if (width > 0) this._width = width;
        else console.error("Width must be positive");
    }
    
    set height(height) {
        if (height > 0) this._height = height;
        else console.error("Height must be positive");
    }
}

// const rect=new Rectangle(-10000,"pi");
// console.log(rect); // Rectangle { _width: -10000, _height: 'pi' }

const rect = new Rectangle(10, 20);
console.log("Initial:", rect);

// Using the setters
rect.width = 30;
rect.height = 40;
console.log("After using setters:", rect);

// Testing with invalid values
rect.width = -5; 
rect.height = -10; 
console.log("After invalid inputs:", rect); 
console.log("Width:", rect._width);
console.log("Height:", rect._height);
