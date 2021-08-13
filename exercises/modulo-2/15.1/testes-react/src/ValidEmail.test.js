import { render } from '@testing-library/react';

import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja valido.', () => {
  const USER_EMAIL = 'email@email.com';

  const { getByText } = render(<ValidEmail email={USER_EMAIL} />);
  const isValid = getByText('Email Valido');

  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const USER_EMAIL = 'invalidemail';

  const { getByText } = render(<ValidEmail email={USER_EMAIL} />);
  const isValid = getByText('Email Inválido');

  expect(isValid).toBeInTheDocument();
});
