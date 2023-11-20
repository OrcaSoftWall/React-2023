import { useContext, useEffect } from 'react'
import * as request from '../../lib/request'
import Path from '../../paths'

export default function Logout() {
    useEffect(() => {
        authService.Logout()
        .then(()=>logoutHandler())
        .catch(()=> navigate(Path.Home))
    }, [])


    return null;
}