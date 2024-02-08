import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import PrivateRoute from './privateRoute';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile'
import UserList from '../pages/userlist'

function RoutesCompnent() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />

                    <Route element={<PrivateRoute />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/userlist" element={<UserList />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default RoutesCompnent;

