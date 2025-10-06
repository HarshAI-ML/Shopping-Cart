import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Context } from '../../Utilities/Context/CartContext';
import CartSummary from './CartSummary';

it('renders total and triggers checkout handler without crashing', () => {
  // Mock global fetch and alert to avoid real network/alerts
  global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({ success: true }) }));
  global.alert = vi.fn();

  const mockContext = {
    cart: [{ id: 1, quantity: 1 }],
    changeQuantity: vi.fn(),
    removeItem: vi.fn(),
    total_price: 123,
  };

  render(
    <Context.Provider value={mockContext}>
      <CartSummary total={123} />
    </Context.Provider>
  );

  expect(screen.getByText(/Total Price: ₹123/)).toBeTruthy();

  fireEvent.click(screen.getByText(/Proceed to Checkout/i));
});


