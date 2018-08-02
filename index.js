// Object literal 
const circle = {
  radius: 1, // property
  location: { // property with more object literals
    x: 1,
    y: 1
  },
  draw: function() { // method
    console.log('Draw')
  }
}
circle.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw')
    }
  }
}

const cir = createCircle(1);
cir.draw();

// Contrustor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('DRAW');
  }
}
const newCircle = new Circle(1);

// -- Primatives and References -- //

// Primative
let a = 10;
let b = a;

a = 20; // a = 20 && b = 10

// Reference
let x = { value: 10 };
let y = x;

x.value  = 20; // x = { value: 20 } && b = { value: 20 }

// Primative
let number = 10;

function increase(number) {
  number++; // number = 11 BUT only in the scope of this function
}

increase(number);
console.log(number) // 10

// Reference
let obj = { value: 10 }

function increase() {
  obj.value++;
}

increase(obj);
console.log(obj);