import { createContext, useState } from "react";

export const ProductData = createContext();

const DataProvider = ({ children }) => {
    const [formData, setFormData] = useState([]);
    const [user, setUser] = useState({});
    const [isLoged, setisLoged] = useState(() => !!localStorage.getItem("userToken"));
    
    const login = (userData) => {
        setisLoged(true);
        setUser(userData);
        localStorage.setItem("userToken", "123456wiendfck");
        localStorage.setItem("userData", JSON.stringify(userData));
    };
    
    const logout = () => {
        setisLoged(false);
        setUser({});
        localStorage.removeItem("userToken");
        localStorage.removeItem("userData");
    };
    
    return (
        <ProductData.Provider value={{ isLoged, login, logout, user, setUser, formData, setFormData }}>
            {children}
        </ProductData.Provider>
    );
};

export default DataProvider;