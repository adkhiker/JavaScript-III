/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
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
