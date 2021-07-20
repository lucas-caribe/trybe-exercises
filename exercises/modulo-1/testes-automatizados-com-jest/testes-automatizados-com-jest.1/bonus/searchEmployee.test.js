const searchEmployee = require('./searchEmployee');

describe('Tests searchEmployee', () => {
  it('should be defined', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('should retrieve the correct information based on the id', () => {
    expect(searchEmployee('5569-4', 'firstName')).toBe('George');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('5569-4', 'specialities')).toEqual([
      'Frontend',
      'Redux',
      'React',
      'CSS',
    ]);
  });

  it('should return an error message if an invalid id is passed', () => {
    expect(searchEmployee('xablau', 'firstName')).toBe('ID não identificada');
  });

  it('should return an error message if an invalid information is passed', () => {
    expect(searchEmployee('5569-4', 'imeiou')).toBe('Informação indisponível');
  });
});
