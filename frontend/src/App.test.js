import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page initially', () => {
  render(<App />);
  
  // Look for text that identifies your landing page (e.g., your branding)
  // Replace 'BMS Engine' with a heading or text present on your Home component
  const brandingElement = screen.getByText(/BMS Engine/i);
  
  expect(brandingElement).toBeInTheDocument();
});