// Simple auth utility for demo purposes

const AUTH_KEY = 'isAuthenticated';
const DEMO_EMAIL = 'admin@demo.com';
const DEMO_PASSWORD = 'admin123';

export function login(email, password) {
  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

export const DEMO_CREDENTIALS = { email: DEMO_EMAIL, password: DEMO_PASSWORD }; 