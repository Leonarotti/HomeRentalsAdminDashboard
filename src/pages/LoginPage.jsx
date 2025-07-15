import LoginForm from '../components/LoginForm';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const success = await login(email, password);
    if (success) navigate('/properties');
  };

  return (
    <main>
      <section className="login-container">
        <h1>Admin Login</h1>
        <LoginForm onLogin={handleLogin} error={error} />
      </section>
    </main>
  );
}
