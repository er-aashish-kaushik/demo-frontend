import axiosInstance from './interceptor'
import { SINGUP_ENDPOINT, LOGIN_ENDPOINT, GET_USERS_LIST } from '../configs/apiEndpoints';

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

export const loginCall = async (userData) => {
    try {
        const response = await axiosInstance.post(LOGIN_ENDPOINT, userData, {
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

export const getUsersList = async (userData) => {
    try {
        const response = await axiosInstance.get(GET_USERS_LIST, {
            headers: {
                'Content-Type': 'application/json',
            },
            includeToken: true

        });
        return response.data;
    } catch (error) {
        console.error('Error signing up:', error.message);
        throw error;
    }
};
