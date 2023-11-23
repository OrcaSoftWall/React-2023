import { createContext, useState } from "react";
import * as authService from '../services/authService'
import { useNavigate } from 'react-router-dom'
import usePersistedState from "../hooks/usePeresistedState";

import Path from '../paths'


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    // const [auth, setAuth] = useState(() => {
    //   localStorage.removeItem('accessToken');
    //   return {};
    // });
    const [auth, setAuth] = usePersistedState('auth', {});
    const loginSubmitHandler = async (values) => {
        console.log(values);
        const result = await authService.login(values.email, values.password);
        console.log(result)
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        console.log(values);
        const result = await authService.register(values.email, values.username, values.password);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
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
    }

    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    )
}

AuthContext.displayName = 'AuthContext';
export default AuthContext;