import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Cars from './Cars';

import renderWithRedux from './utils/renderWithRedux';

describe('Testing cars', () => {
  const initialState = {
    cars: {
      red: false,
      blue: false,
      yellow: false,
    },
  };

  test('if the cars are being rendered', () => {
    renderWithRedux(<Cars />, { initialState });

    const redCar = screen.getByAltText('red car');
    const blueCar = screen.getByAltText('blue car');
    const yellowCar = screen.getByAltText('yellow car');

    expect(redCar).toBeInTheDocument();
    expect(blueCar).toBeInTheDocument();
    expect(yellowCar).toBeInTheDocument();
  });

  test('if all cars have the default class', () => {
    renderWithRedux(<Cars />, { initialState });

    const redCar = screen.getByAltText('red car');
    const blueCar = screen.getByAltText('blue car');
    const yellowCar = screen.getByAltText('yellow car');

    expect(redCar.className).toBe('car-left');
    expect(blueCar.className).toBe('car-left');
    expect(yellowCar.className).toBe('car-left');
  });

  test('if there are 3 buttons on the screen', () => {
    renderWithRedux(<Cars />, { initialState });

    const buttons = screen.getAllByRole('button', { name: 'move' });

    expect(buttons.length).toBe(3);
  });

  test('if the cars are moving when each button is clicked', () => {
    renderWithRedux(<Cars />, { initialState });

    const redCar = screen.getByAltText('red car');
    const blueCar = screen.getByAltText('blue car');
    const yellowCar = screen.getByAltText('yellow car');

    const [redButton, blueButton, yellowButton] = screen.getAllByRole(
      'button',
      { name: 'move' },
    );

    fireEvent.click(redButton);
    expect(redCar.className).toBe('car-right');
    fireEvent.click(redButton);
    expect(redCar.className).toBe('car-left');

    fireEvent.click(blueButton);
    expect(blueCar.className).toBe('car-right');
    fireEvent.click(blueButton);
    expect(blueCar.className).toBe('car-left');

    fireEvent.click(yellowButton);
    expect(yellowCar.className).toBe('car-right');
    fireEvent.click(yellowButton);
    expect(yellowCar.className).toBe('car-left');
  });
});
