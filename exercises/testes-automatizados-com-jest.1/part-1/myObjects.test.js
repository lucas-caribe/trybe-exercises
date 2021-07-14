const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('Testing objects', () => {
  test('if obj1 is equal to obj2', () => {
    expect(obj1).toEqual(obj2);
  });

  test('if obj1 is equal to obj3', () => {
    expect(obj1).toEqual(obj2);
  });
});
