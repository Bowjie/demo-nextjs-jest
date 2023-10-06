import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Login from '@/app/Login';

describe('Login', () => {
  it('expect the login to be in the document', () => {
    const { container } = render(<Login />);

    expect(container).toBeInTheDocument();
  });
  it('expect the login to be successfull', () => {
    let isLoggedIn = false;

    const handleLogin = (status: 'success' | 'failed') => {
      isLoggedIn = status === 'success' ? true : false;
    };

    const { getByPlaceholderText, getByText } = render(<Login onLogin={handleLogin} />);

    // Simulate user input
    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'demo@mail.com' },
    });
    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'test' },
    });

    fireEvent.click(getByText('Sign in'));

    expect(isLoggedIn).toBe(true);
  });
  it('expect the login to be failed', () => {
    let isLoggedIn = false;

    const handleLogin = (status: 'success' | 'failed') => {
      isLoggedIn = status === 'success' ? true : false;
    };

    const { getByPlaceholderText, getByText } = render(<Login onLogin={handleLogin} />);

    // Simulate user input
    fireEvent.change(getByPlaceholderText('Email'), {
      target: { value: 'test@mail.com' },
    });
    fireEvent.change(getByPlaceholderText('Password'), {
      target: { value: 'qwerty123' },
    });

    fireEvent.click(getByText('Sign in'));

    expect(isLoggedIn).toBe(false);
  });
  it('expect the login to trigger required fields', () => {
    let status = '';
    const handleLogin = (result: string) => (status = result);
    const { getByText } = render(<Login onLogin={handleLogin} />);

    fireEvent.click(getByText('Sign in'));

    expect(status).toBe('requiredFields');
  });
});
