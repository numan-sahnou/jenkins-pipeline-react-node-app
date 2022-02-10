import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter text', () => {
  render(<App />);
  const counter_text = screen.getByText(/This page has been refreshed/i);
  expect(counter_text).toBeInTheDocument();
});