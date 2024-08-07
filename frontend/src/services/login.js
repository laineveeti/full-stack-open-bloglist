import axios from 'axios';
import { handleAxiosError } from './utils';

const baseUrl = '/api/login';

const login = async (credentials) => {
    try {
        const response = await axios.post(baseUrl, credentials);
        return response.data;
    } catch (exception) {
        handleAxiosError(exception);
    }

};

export default login;