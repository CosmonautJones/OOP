# Object-Oriented Programming

A paradigm in programming

## Objects:

### Creating Objects:

- Object literals = {}
  * They are the curly braces, which is a simple way that defines an object
  * They consist of key:value pairs
       * consisting of properties and methods
          * properties are used to hold values
          * methods are functions used to define some logic
  * Downside is that you would have to duplicate all the code to create another object like it
  * When an object has one or methods, it is said that the object has "behavior" (like a person that can do different things)

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

  
#### Factory Function
- Factory functions is a function that returns a created object with methods or properties using the parameters passed into the function
  - This is reduce duplication of code for objects who have "behavior"

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

#### Constructor Function
* similar to a class in other languages, but JavaScript doesn't have the concept of classes. So it is a  function that mimics the creating an instance of the main constructor

* Capitalize the beginning of the function name
* **_this_** references the object that is executing the code
	* sets properties on that obejct
	* By default this points to the global object (or window in the browser)
*  Use the **new** operator to call the function that is the contructor
	* new creates an empty object '{}' and this points to that object
	* If you don't use new then this will point to the window/global object

```
function Circle(radius) {
	this.radius = radius;
	this.draw = function() {
		console.log('DRAW');
	}
}
const newCircle = new Circle(1);
```

When you __return the object__, it is considered a __Factory Function__.

When you use **_this_** and the **new** operator is considered a __Constructor Function__

Constructor is also a property itself on the object which references the function that was used to construct or create the object

```
newCircle.constructor
ƒ Circle(radius) {
	  this.radius = radius;
	  this.draw = function() {
	    console.log('DRAW');
	  }
}
```

In the JavaScript engine when using literals like:
- let x = '', "", ``
- let y = {}
- let z = []
- let w = 1, 2, 3
- let q = true, false

It translates to:
- new String();
- new Object();
- new Array();
- new Number();
- new Boolean();

So the constructor is the function that is used to create that object such as listed above

- Functions are Objects, and to create them, Javascript under the hood creates a Function Constructor

	* Therefore you have access to methods for functions
		* `call({}, argument)`
	      * **_this_** is referencing to the object that is passed into first argument
      * `apply({}, [arrayOfData])`
		* exactly the same as call(), except that the second argument is an array that is passed in
		* **_this_** is referencing to the object that is passed into first argument
		
    * exactly the same as saying:
```
Circle.call({}, 1);
        ||
const newCircle = new Circle(1);
```
### Primitives(Value) and Reference Types:

Primatives(Value) Types:
- Number
- String
- Boolean
- Symbol (new in es6)
- undefined
- null

Reference Types:

- Object
- Function
- Array

When a variable is storing values in memory and another variable is set to the other, it is copying the value in a separate memory. So they are independent from each other.
```
let x = 10; 
let y = x;

x = 20;

console.log(x) // 20 
console.log(y) // 10
```
---

When a variable is an object, the object itself isn't stored at that variable's memory location, the address of that memory location for the object is stored as that variable.

```
let x = { value: 10 };
let y = x;

x.value = 20;
```

Therefore when another variable copies it, it copies the location of the object, thus changing when the object is changed

---

**_Primatives_** are copied by their **_value_**

**_Objects_** are copied by their **_reference_**

---

Since we are referencing 'number' in this case, the argument number copies the value, but since it's we're dealing with scope, even though the number increments inside the function, it won't affect the number variable.

#### Primative

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

#### Reference

```
let obj = { value: 10 }

function increase(obj) {
	obj.value++; // goes to the location of the object and changes its value
}

increase(obj);
console.log(obj); // 11
```

### Working with Properties

**Adding properties:**
- A use case can be adding a token to the user object in web/mobile application

To add you can simply call the class and the new property of in dot notation, like:
```
const newCircle = new Circle(1);
newCircle.location = { x: 1 }
```
Or even with bracket notation:
```
newCircle['location'] = { y: 2 }
```
A good use for bracket notation is dynamic property evaluation at runtime by creating a variable to be the property and calling that varible within the brackets
```
const propertyName = 'location';
newCircle[propertyName] = { y: 3 };
```
Another good use for bracket notation is when the property name has a dash in it because dot notation can't be called like that, such as:
```
const propertyName = 'center-location';
```

**Deleting properties:**
- Use case would be taking off user password, credit card info when the user object is sent to the client

Using the *delete* keyword:
```
delete circle['location'];
```

**Enumerating Properties (Iterating):**
- In many cases it is neccessary to iterate of the object to be able to manipulate and have more dynamic power when working with objects

Using the for-in loop:
 * **keys**
 ```
for (let key in newCircle) {
	console.log(key)
}
```
 * **values**
 ```
for (let key in newCircle) {
	console.log(key, newCircle[key])
}
```
If you wish to filter out methods in the values of the object by checking the typeof:
```
for (let key in newCircle) {
	if (typeof newCircle[key] !== 'function')
	console.log(key, newCircle[key])
}
```
You can also use the **Object** class which has the methods of **keys** and **values** where you pass in the object of interest and get the keys or values returned in an array:
```
const keys = Object.keys(newCircle);
console.log(keys);

const values = Object.values(newCircle);
console.log(values);
```

To check if the a object has a given property or method using the in operator where the property in question is in a string as the first parameter:
```
if ('radius' in newCircle) {
	console.log('Circle has a radius');
}
```
## Abstraction
Hides complexitiy of the class, because not all members of the class should be accessible to the consumer/client

* **Hide the details <|-|> Show the essentials**

### Private Properties
A great way to hide properties and methods and keep them within the scope of the function is to create local variables within the function.
```
function Circle(radius) {
	this.radius = radius;
	let = defaultLocation = {x: 0, y: 0};
	let computeOptimumLocation = function() {
		// ... magic
	}
	this.draw = function() {
		console.log('DRAW');
	}
}
```
This is a great example of closure, which is like scope and allows variables to be created within the parent function and be called within functions inside the parent function.
 * The difference between closure and scope is that scope is temporary, once the variables are finished being used and it goes out of the functionthey were used, they get removed. But in closure the variable persist in memory and preserve their state
```		
function Circle(radius) {
	this.radius = radius;
	let = defaultLocation = {x: 0, y: 0};
	let computeOptimumLocation = function() {
		// ... magic
	}
	this.draw = function() {
		computeOptimumLocation(); // able to be called because of closure
		console.log('DRAW');
	}
}
```
Remember that to access those variables or functions you can just call them like normal javascript, but to access the other methods and properties in the main Contructor, you still use this.
```
function Circle(radius) {
	this.radius = radius;
	let = defaultLocation = {x: 0, y: 0};
	let computeOptimumLocation = function() {
		// ... magic
	}
	this.draw = function() {
		computeOptimumLocation();
		defaultLocation; // hidden variable
		this.radius;    // visible property
		console.log('DRAW');
	}
}
```

### Getters/Setters
