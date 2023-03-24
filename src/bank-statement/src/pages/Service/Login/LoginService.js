import { SaveToken } from '../Token/TokenHandler'
import { api } from '../api'

export const Authentication = (email, password) => { 
    api.post(`api/v1/login`, { email, password })
        .then(res => {
            SaveToken(res.data.token);
        })
        .catch(error => {
            console.log("to no catch do auth")
            throw error;
        });
}