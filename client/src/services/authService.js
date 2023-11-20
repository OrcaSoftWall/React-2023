import * as request from '../lib/request';


const baseURL = 'http://localhost:3030/users';

export const login = async (email,password) => {
    const result = await request.post(`${baseURL}/login`,{email, password});
    return result;
}

