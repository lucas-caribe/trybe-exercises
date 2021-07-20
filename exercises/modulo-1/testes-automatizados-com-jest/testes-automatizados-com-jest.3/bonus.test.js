const fetch = require('node-fetch');
const fetchJoke = require('./fetchJoke');

jest.mock('node-fetch');

describe('Testing fetchJoke', () => {
  const expected = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  fetch.mockImplementationOnce(async () => ({
    json: () => expected,
  }));

  it('should return a dog image link', async () => {
    expect.assertions(1);

    const data = await fetchJoke();
    expect(data).toEqual(expected.joke);
  });
});
