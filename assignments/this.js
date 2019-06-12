/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding: If not contained within an Object scope, 'this' has global scope.
 * 2. Implicit Binding: references the tag to the left of the . that precedes the function name.
 * 3. New Binding - when used with a constructor function 'this' refers to the object it is being called on.
 * 4. Explicit Binding: the use of .call and .apply, 'this' is included as the first argument and denotes the Object the calling method invokes.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function sayHello(string) {
  console.log(this);
  return string;
}
sayHello("Hello");

// Principle 2
// code example for Implicit Binding
var whoAmI = {
  name: "Greg",
  sex: "male",
  sayName: function() {
    console.log(this.name);
  }
};
whoAmI.sayName();

// Principle 3
// code example for New Binding
function placeOrder(item) {
  this.Item = item;
  this.food = function() {
    console.log(
      `I am hungry for ${this.Item} today. Think I'll order lunch now.`
    );
  };
}
const pepperoniPizza = new placeOrder("pepperoni pizza");
const chineseFood = new placeOrder("Kung Poo");

chineseFood.food();
pepperoniPizza.food();
// Principle 4
// code example for Explicit Binding
function Mult(num1, num2) {
  num1 = 5;
  num2 = 10;
  return num1 * num2;
}
function Mult2() {
  return Mult.call(this, 10, 12);
}

console.log(Mult());
console.log(Mult2());
