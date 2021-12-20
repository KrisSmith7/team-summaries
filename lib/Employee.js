class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      };

getName() {
    return this.name;
};
  
getId() {
    return this.id;
};

getEmail() {
    return `<a href="mailto:${this.email}">${this.email}</a>`
    // return this.email
};

getRole() {
    return "Employee"
};

getSpecial (){
    return ""
}
};

module.exports = Employee;