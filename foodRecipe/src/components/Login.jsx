import React, { useContext } from 'react';
import { ProductData } from '../ContextApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { user, setUser, formData, login } = useContext(ProductData);
    const navigate = useNavigate();

    function handler(e) {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundUser = formData.find(item => 
            item.email === user.email && item.password === user.password
        );
        
        if (foundUser) {
            alert("Login Successful");
            login(foundUser); // Pass the found user data to login
            navigate("/home");
        } else {
            alert("Invalid email or password");
        }
    };

    return (
        <div className='signup-container'>
            <form onSubmit={handleSubmit} className='form'>
                <h1 style={{ textAlign: "center" }}>Login</h1>
                
                <span>Email:</span>
                <input type="email" name="email" value={user?.email || ""} onChange={handler} required />
                
                <span>Password:</span>
                <input type="password" name="password" value={user?.password || ""} onChange={handler} required />
                
                <button className='sub-btn'>Login</button>
            </form>
        </div>
    );
};

export default Login;