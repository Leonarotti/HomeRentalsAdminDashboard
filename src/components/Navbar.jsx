import { Link, useNavigate, useLocation } from 'react-router-dom';
import { logout, isAuthenticated } from '../services/authService';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated() || location.pathname === '/login') return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header>
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar-content">
          <Link to="/properties" className="navbar-logo">🏠 Home Rentals Admin</Link>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </header>
  );
} 