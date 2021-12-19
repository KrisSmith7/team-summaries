const Engineer = require ("../lib/Engineer")

test('Creates a new Engineer object', () => {
    const engineer = new Engineer('Pam', '789GHI', 'pam@engineer.com', 'pambeesly1')

    expect(engineer.name).toBe('Pam')
    expect(engineer.id).toBe('789GHI')
    expect(engineer.email).toBe('pam@engineer.com')
    expect(engineer.githubName).toBe('pambeesly1')

}
)