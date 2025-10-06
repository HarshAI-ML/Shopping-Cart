import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Context } from '../../Utilities/Context/CartContext';
import MyCart from './MyCart';

it('renders empty state when cart is empty', () => {
  const value = { cart: [], changeQuantity: () => {}, removeItem: () => {}, total_price: 0 };
  render(
    <Context.Provider value={value}>
      <MyCart />
    </Context.Provider>
  );
  expect(screen.getByText(/Your cart is empty/i)).toBeTruthy();
});

it('renders items and summary when cart has products', () => {
  const value = {
    cart: [{ id: 1, image: 'a.png', description: 'Prod A', price: 50, quantity: 1 }],
    changeQuantity: () => {},
    removeItem: () => {},
    total_price: 50,
  };

  render(
    <Context.Provider value={value}>
      <MyCart />
    </Context.Provider>
  );

  expect(screen.getByText('My Cart')).toBeTruthy();
  expect(screen.getByText('Prod A')).toBeTruthy();
  expect(screen.getByText(/Total Price: ₹50/)).toBeTruthy();
});


