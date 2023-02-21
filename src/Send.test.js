import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hi', () => {
  render(<App />);
  screen.debug()
  const linkElement = screen.getByText(/hi/i);
  expect(linkElement).toBeInTheDocument();
  
});
