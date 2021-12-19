const Intern = require ('../lib/Intern')

test('Creates a new Intern object', () => {
    const intern = new Intern ('Luke', '012JKL', 'luke@intern.edu', 'UNC Chapel Hill');

    expect(intern.name).toBe("Luke");
    expect(intern.id).toBe("012JKL");
    expect(intern.email).toBe("luke@intern.edu");
    expect(intern.school).toBe("UNC Chapel Hill");

})