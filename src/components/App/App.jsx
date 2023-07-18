import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import {selectIsRefreshing}from "../../redux/auth/auth-selectors"
import { PrivateRoute } from '../PrivateRoute';
import { RestrictedRoute } from '../RestrictedRoute';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { GlobalStyle } from '../GlobalStyle';


const Home = lazy(() => import('../../pages/Home'));
const Contacts = lazy(() => import('../../pages/Contacts'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    
    <>
      <GlobalStyle />
      
      {isRefreshing ? <b>Refresh user</b> :  (<Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={ <RestrictedRoute redirectTo="/contacts" component={<Register />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        </Route>
      </Routes>)}</>
      
    
  );
}
