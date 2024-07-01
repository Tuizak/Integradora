import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Componentes/authContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);
  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
