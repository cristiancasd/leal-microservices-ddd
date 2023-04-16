import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { checkDocumentCc } from '../store/auth/thunks';
import { onResetPoints } from '../store/points/pointsSlice';
import { CheckingAuth } from '../ui/components/CheckingAuth';
import { UserRoutes } from '../user/routes/UserRoutes';
/*import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { getEnvVariables } from '../helpers/getEnvVariables'
import { SearcherRoutes } from '../searcher/routes/SearcherRoutes'
import { checkEmail } from '../store/auth/thunks'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { MaintenancePage } from '../ui/components/MaintenancePage'*/

export const AppRouter = () => {
  //const {VITE_API_MAINTENANCE}=getEnvVariables();

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log('voy a checkear Inicio auto Auth');
    dispatch(checkDocumentCc());
    dispatch(onResetPoints());
  }, []);

  if (status === 'checking') {
    return <CheckingAuth />;
  }

  /*const {isComunicating} = useSelector(state => state.commonProcess);

  useEffect(()=>{
    console.log('voy a checkear Inicio auto Auth')
    dispatch(checkEmail());
  },[])*/

  /*
  if(VITE_API_MAINTENANCE && VITE_API_MAINTENANCE==='YES'){
    return <MaintenancePage/> 
  }


  if(status==='checking' || isComunicating ){
    return <CheckingAuth/> 
  }*/

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
