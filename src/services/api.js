import axiosInstance from './interceptor'
import { SINGUP_ENDPOINT } from '../configs/apiEndpoints';

export const signupCall = async (userData) => {
    try {
        const response = await axiosInstance.post(SINGUP_ENDPOINT, userData, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error.message);
        throw error;
    }
};
