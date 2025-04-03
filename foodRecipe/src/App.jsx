import { useContext, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './pages/Dashbord';
import { ProductData } from './ContextApi';
import SavedRecipes from './components/SavedRecipes';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home searchTerm={searchTerm} />
          </ProtectedRoute>
        } />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<SavedRecipes />} />

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </div>
  );
}

// Add this component
function ProtectedRoute({ children }) {
  const { isLoged } = useContext(ProductData);
  return isLoged ? children : <Navigate to="/signup" />;
}

export default App;