import React, { useContext } from 'react';
import { ProductData } from '../ContextApi';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const { isLoged } = useContext(ProductData);
    return isLoged ? <Navigate to="/home" /> : <Navigate to="/login" />;
};

export default Dashboard;