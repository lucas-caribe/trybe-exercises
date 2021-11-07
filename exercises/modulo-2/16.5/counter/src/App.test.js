import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRedux from './utils/renderWithRedux';

import App from './App';

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should HAVE a button and a text 0', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.queryByText('Clique aqui');
    const number = screen.queryByText('0');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />);

    const buttonAdicionar = screen.queryByText('Clique aqui');
    const number = screen.queryByText('0');

    expect(number.textContent).toBe('0');

    userEvent.click(buttonAdicionar);

    expect(number.textContent).toBe('1');
  });

  test('too lazy for that', () => {
    renderWithRedux(<App />, {
      initialState: { clickReducer: { counter: 10 } },
    });

    const buttonAdicionar = screen.queryByText('Clique aqui');
    const number = screen.queryByText('10');

    expect(number.textContent).toBe('10');

    userEvent.click(buttonAdicionar);

    expect(number.textContent).toBe('11');
  });
});
