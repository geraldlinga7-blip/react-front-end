import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders the React demo page and user list', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: 'Leanne Graham' }],
  });

  render(<App />);

  expect(screen.getByRole('heading', { name: 'Hello React' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { name: 'Kishe' })).toHaveLength(2);
  expect(screen.getByPlaceholderText('Input your name')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Count: 5' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Users List' })).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('Leanne Graham')).toBeInTheDocument();
  });

  global.fetch.mockRestore?.();
});
