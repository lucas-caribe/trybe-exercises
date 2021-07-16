const fetch = require('node-fetch');
const getDogPicture = require('./getDogPicture');

jest.mock('node-fetch');

describe('Testing getDogPicture', () => {
  fetch.mockImplementationOnce(async () => ({
    json: () => ({ status: 'success' }),
  }));

  fetch.mockImplementationOnce(() =>
    Promise.reject(Promise.reject({ status: 'error' })),
  );

  it('should return a dog image link', async () => {
    expect.assertions(1);

    const data = await getDogPicture();
    expect(data.status).toBe('success');
  });

  it('should return an error', async () => {
    expect.assertions(1);

    expect(getDogPicture()).rejects.toEqual({ status: 'error' });
  });
});
