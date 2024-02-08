import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = AuthContext;
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />

};

export const RestrictedForLoggedUser = ({ children }) => {
    const { isLoggedIn } = AuthContext;
    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />

};


export default PrivateRoute;
