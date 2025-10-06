import { it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

// Mock Cards to avoid Router/Context dependencies inside it
vi.mock('../../Components/Cards/Cards.jsx', () => ({
  default: ({ description }) => <div>{description}</div>,
}));

import ProductGrid from './ProductGrid';

it('fetches and renders products', async () => {
  const mockProducts = [
    { id: 1, image: 'a.png', description: 'Item A', price: 10 },
    { id: 2, image: 'b.png', description: 'Item B', price: 20 },
  ];

  global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve(mockProducts) }));

  render(<ProductGrid />);

  await waitFor(() => {
    expect(screen.getByText('Item A')).toBeTruthy();
    expect(screen.getByText('Item B')).toBeTruthy();
  });
});


