import { render } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());
test('if a random joke is rendered', async () => {
  const joke = {
    id: '08xHQCdx5Ed',
    joke: 'Why didn’t the skeleton cross the road? Because he had no guts.',
    status: 200,
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(joke),
    }),
  );

  const { findByText } = render(<App />);

  const jokeElement = await findByText(joke.joke);

  expect(jokeElement).toBeDefined();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
});
