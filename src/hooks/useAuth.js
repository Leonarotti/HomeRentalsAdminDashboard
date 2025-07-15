import { useState } from 'react';
import { login as loginService, logout as logoutService, isAuthenticated as isAuth } from '../services/authService';

export function useAuth() {
  const [error, setError] = useState('');

  const login = (email, password) => {
    const success = loginService(email, password);
    setError(success ? '' : 'Invalid credentials');
    return success;
  };

  const logout = () => logoutService();

  return { login, logout, isAuthenticated: isAuth, error };
}
