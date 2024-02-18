import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../context/authContext';
import PrivateRoute, { RestrictedForLoggedUser } from './privateRoute';
import Login from '../pages/login';
import Register from '../pages/register';
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile'
import UserList from '../pages/userlist'
import McqScreen from '../pages/keyMouseMCQ'

function RoutesCompnent() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route exact path="/version" element={<div>1.0.0</div>} />
                    <Route exact path="/McqScreen" element={<McqScreen />} />
                    <Route element={<RestrictedForLoggedUser />}>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/register" element={<Register />} />
                    </Route>
                    <Route element={<PrivateRoute />}>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/userlist" element={<UserList />} />
                    </Route>
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default RoutesCompnent;

