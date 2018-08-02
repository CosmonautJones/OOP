# Object-Oriented Programming

A paradigm in programming

## Objects:

### Creating Objects:

    - Object literals = {}
    	○ They are the curly braces, which is a simple way that defines an object
    	○ They consist of key:value pairs
    		§ consisting of properties and methods
    			□ properties are used to hold values
    			□ methods are functions used to define some logic
    	○ Downside is that you would have to duplicate all the code to create another object like it
    	○ When an object has one or methods, it is said that the object has "behavior" (like a person that can do different things)

```
		const circle = {
			radius: 1,     // property
			location: {   // property with more object literals
				x: 1,
				y: 1
			},
			draw: function() { // method
				console.log('Draw')
			}
		}
		circle.draw();
```

### Factories and Constructors:

    - Factory functions is a function that returns a created object with methods or properties using the parameters passed into the function
    	○ This is reduce duplication of code for objects who have "behavior"
    	// Factory Function

```
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
```

    - Constructor Function is similar to a class in other languages, but JavaScript doesn't have the concept of classes. So it is a  function that mimics the creating an instance of the main constructor
    	○ Capitalize the beginning of the function name
    	○ this references the object that is executing the code
    		§ sets properties on that obejct
    		§ ** By default this points to the global object (or window in the browser) **
    	○ Use the new operator to call the function that is the contructor
    		§ new creates an empty object '{}' and this points to that object
    		§ If you don't use new then this will point to the window/global object
    		// Contrustor Function

```
			function Circle(radius) {
				this.radius = radius;
				this.draw = function() {
					console.log('DRAW');
				}
			}
			const newCircle = new Circle(1);
```

    - ** When you return the object, it is considered a Factory Function. **
    - ** When you use this and the new operator is considered a Constructor Function **
    - Constructor is also a property itself on the object which references the function that was used to construct or create the object

```
	    newCircle.constructor
		ƒ Circle(radius) {
	       this.radius = radius;
	       this.draw = function() {
	         console.log('DRAW');
	       }
	    }
```

    	○ In the JavaScript engine when using literals like:
    		§ let x = '', "", ``
    		§ let y = {}
    		§ let z = []
    		§ let w = 1, 2, 3
    		§ let q = true, false
    	It translates to:
    		§ new String();
    		§ new Object();
    		§ new Array();
    		§ new Number();
    		§ new Boolean();
    	So the constructor is the function that is used to create that object such as listed above

    - ** Functions are Objects, and to create them, Javascript under the hood creates a Function Constructor
    	○ Therefore you have access to methods for functions
    		§ call({}, argument)
    			□ this is referencing to the object that is passed into first argument
    			□ exactly the same as saying:
    			Circle.call({}, 1);
    			      ||
        const newCircle = new Circle(1);
    		§ apply({}, [arrayOfData])
    			□ this is referencing to the object that is passed into first argument
    			□ exactly the same as call(), except that the second argument is an array that is passed in



### Primitives(Value) and Reference Types:

    - Primatives(Value) Types:
    	○ Number
    	○ String
    	○ Boolean
    	○ Symbol (new in es6)
    	○ undefined
    	○ null
    - Reference Types:
    	○ Object
    	○ Function
    	○ Array

When a variable is storing values in memory and another variable is set to the other, it is copying the value in a separate memory. So they are independent from each other.
`let x = 10; let y = x; x = 20; console.log(x) // 20 console.log(y) // 10`
---------------------------------------------------------------
When a variable is an object, the object itself isn't stored at that variable's memory location, the address of that memory location for the object is stored as that variable.

```
let x = { value: 10 };
let y = x;

x.value = 20;
```

Therefore when another variable copies it, it copies the location of the object, thus changing when the object is changed

---

**_ Primatives are copied by their value _**
**_ Objects are copied by their reference _**
-------------------------------------------------
Since we are referencing 'number' in this case, the argument number copies the value, but since it's we're dealing with scope, even though the number increments inside the function, it won't affect the number variable.

// Primative

```
let number = 10;

function increase(number) {
	number++; // number = 11 BUT only in the scope of this function
}

increase(number);
console.log(number) // 10
```

---

Since we are dealing with an obj in this case, we are dealing with the address of the obj and not just the value. So it's being referenced regardless of scope issues.

// Reference

```
let obj = { value: 10 }

function increase(obj) {
	obj.value++; // goes to the location of the object and changes its value
}

increase(obj);
console.log(obj); // 11
```

### Working with Properties

### Private Properties

### Getters/Setters
