/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';

const AdminPrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('AdminJwt') && !!localStorage.getItem('adminId');

  return isAuthenticated ? children : <Navigate to="/admin/login" />;
};

export default AdminPrivateRoute;