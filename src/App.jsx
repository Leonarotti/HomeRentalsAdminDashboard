import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import PropertiesPage from './pages/PropertiesPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import RequireAuth from './utils/RequireAuth.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/properties"
          element={
            <RequireAuth>
              <PropertiesPage />
            </RequireAuth>
          }
        />
        <Route
          path="/properties/:id"
          element={
            <RequireAuth>
              <PropertyDetailsPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
