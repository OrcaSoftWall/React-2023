import { createContext, useState } from "react";
import * as authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import usePersistedState from "../hooks/usePeresistedState";

import Path from '../paths'


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();

    const [authError, setAuthError] = useState(null);

    const [auth, setAuth] = usePersistedState('auth', {});
    const loginSubmitHandler = async (values) => {
        try {
            // console.log(values);
            const result = await authService.login(values.email, values.password);
            // console.log(result)
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
            setAuthError(null); // Reset any previous errors on successful login
        } catch (error) {
            // Handle the error, e.g., set the error message
            setAuthError(error.message || 'Failed to log in!');
        }
    };

    const registerSubmitHandler = async (values) => {
        if (values.email && values.password && values.password === values.rePassword) {
            console.log(values);
            const result = await authService.register(values.email, values.username, values.password, values.rePassword);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Home);
        } else {
            setAuthError("Password and rePassword should match!")
        }
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };


    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        authError,
    }

    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    )
}

AuthContext.displayName = 'AuthContext';
export default AuthContext;