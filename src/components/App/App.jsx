import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import {selectIsRefreshing}from "../../redux/auth/auth-selectors"

import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { GlobalStyle } from '../GlobalStyle';
import { Layout } from '../Layout';

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
    <Layout>
      <GlobalStyle />
      
      {!isRefreshing && (<Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>)}
      
    </Layout>
  );
}
