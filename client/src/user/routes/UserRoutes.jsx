import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { startGetInitalPoints, startGetPoints } from '../../store/points/thunks';
import { LoadingUserScore } from '../../ui/components/LoadingUserScore';
import { UserPage } from '../pages/UserPage';

export const UserRoutes = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { scoreData } = useSelector((state) => state.points);

  useEffect(() => {
    !scoreData && dispatch(startGetInitalPoints(user.documentCc));
  }, []);

  if (!scoreData) return <LoadingUserScore />;

  return (
    <Routes>
      <Route path="user" element={<UserPage />} />
      <Route path="/*" element={<Navigate to="/user" />} />
    </Routes>
  );
};
