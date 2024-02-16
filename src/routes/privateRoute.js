import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Layout from '../components/layout'
const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    return isLoggedIn ? <Layout><Outlet /> </Layout> : <Navigate to='/login' />

};

export const RestrictedForLoggedUser = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    return !isLoggedIn ? <Outlet /> : <Navigate to='/' />

};


export default PrivateRoute;
