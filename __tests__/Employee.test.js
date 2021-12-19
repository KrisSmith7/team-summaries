const Employee = require('../lib/Employee')


test('creates a new employee', () => {
    const employee = new Employee ("Kris", "123ABC", "kris@email.com");
    
    expect(employee.name).toBe("Kris");
    expect(employee.id).toBe("123ABC");
    expect(employee.email).toBe("kris@email.com")
});