import { it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Context } from '../../Utilities/Context/CartContext';
import Cards from './Cards';

it('renders product info and calls addToCart then navigates', () => {
  const addToCart = vi.fn();
  const product = { id: 7, image: 'img.png', description: 'Phone', price: 999 };

  render(
    <Context.Provider value={{ addToCart }}>
      <MemoryRouter>
        <Cards {...product} />
      </MemoryRouter>
    </Context.Provider>
  );

  expect(screen.getByText('Phone')).toBeTruthy();
  expect(screen.getByText(/Price: ₹999/)).toBeTruthy();

  fireEvent.click(screen.getByText(/Add to Cart/i));
  expect(addToCart).toHaveBeenCalledWith({ id: 7, name: 'Phone', image: 'img.png', price: 999 });
});


