import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useContext, useState } from 'react';
import "./navbar.css";
import { ProductData } from '../ContextApi';

const Navbar = ({ searchTerm, setSearchTerm }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { isLoged, logout, user } = useContext(ProductData);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to={isLoged ? "/home" : "/"} className="navbar-logo">
                    RecipeApp
                </Link>
                {isLoged && <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
                
                <button 
                    className="mobile-menu-toggle" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
                
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    {isLoged ? (
                        <>
                            <span className="welcome-message">
                                Welcome, {user?.name || 'User'}
                            </span>
                            <button 
                                className="navbar-link logout-btn" 
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                                Login
                            </Link>
                            <Link to="/signup" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                                Signup
                            </Link>
                        </>
                    )}
                </div>
                
                    
            </div>
        </nav>
    );
};

export default Navbar;