// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MetaDeploy title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MetaDeploy/i);
    expect(titleElement).toBeInTheDocument();
});
