import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { checkDocumentCc } from '../store/auth/thunks';
import { onResetPoints } from '../store/points/pointsSlice';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { UserRoutes } from '../user/routes/UserRoutes';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkDocumentCc());
    dispatch(onResetPoints());
  }, []);

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <Route path="/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<UserRoutes />} />
      )}
    </Routes>
  );
};
