import { render, fireEvent } from '@testing-library/react';

import App from './App';

test('Verificando se o botão e o campo email estão funcionando', () => {
  const { getByTestId, getByLabelText } = render(<App />);

  const USER_EMAIL = 'email@email.com';

  const emailText = getByTestId('id-user-email');
  expect(emailText).toBeInTheDocument();
  expect(emailText).toHaveTextContent('Valor:');

  const button = getByTestId('id-send');
  const emailInput = getByLabelText('Email');

  fireEvent.change(emailInput, { target: { value: USER_EMAIL } });
  fireEvent.click(button);

  expect(emailInput).toHaveValue('');
  expect(emailText).toHaveTextContent(`Valor: ${USER_EMAIL}`);
});
