const Manager = require('../lib/Manager')

test('creates a new manager object', () => {
    const manager = new Manager ("Jane", "456DEF", "manager@email.com", "800-555-1234");
    
    expect(manager.name).toBe("Jane");
    expect(manager.id).toBe("456DEF");
    expect(manager.email).toBe("manager@email.com")
    expect(manager.officeNumber).toBe("800-555-1234")
});