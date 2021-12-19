const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name = '', id = '', email = '') {
      //calls parent constructor
      super(name);  
  
      this.inventory = [new Potion('health'), new Potion()];
    }
}