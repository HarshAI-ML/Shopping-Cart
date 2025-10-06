import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from './CartItem';

it('renders item and handles quantity and remove actions', () => {
  const item = { id: 1, image: 'img.png', description: 'Test Item', price: 100, quantity: 2 };
  const changeQuantity = vi.fn();
  const removeItem = vi.fn();

  render(<CartItem item={item} changeQuantity={changeQuantity} removeItem={removeItem} />);

  expect(screen.getByText('Test Item')).toBeTruthy();

  fireEvent.click(screen.getByText('+'));
  expect(changeQuantity).toHaveBeenCalledWith(1, 1);

  fireEvent.click(screen.getByText('-'));
  expect(changeQuantity).toHaveBeenCalledWith(1, -1);

  fireEvent.click(screen.getByText('Remove'));
  expect(removeItem).toHaveBeenCalledWith(1);
});


