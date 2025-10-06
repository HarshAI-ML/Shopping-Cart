import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

it('renders Shopping Cart text', () => {
  render(<Navbar />);
  // getByText throws if not found, which fails the test; additionally assert truthy
  expect(screen.getByText(/Shopping Cart/i)).toBeTruthy();
});


