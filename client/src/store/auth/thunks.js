import { findUserByDocumentCc } from '../../helpers/findUserByDocumentCc';
import { onResetScoreData } from '../points/pointsSlice';
import { checkingCredentials, onLogin, onLogout, setErrorMessageAuth } from './authSlice';

export const startLogin = ({ documentCc }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    try {
      const data = await findUserByDocumentCc(documentCc);

      if (data.idUser) {
        dispatch(onLogin(data));
        localStorage.setItem('documentCc', documentCc);
      } else {
        dispatch(onLogout(data.error ? data.error : 'Internal Error'));
        //dispatch(setErrorMessageAuth(data.error ? data.error : 'Internal Eror'));
        //setTimeout(() => {
        //  dispatch(setErrorMessageAuth(undefined));
        //}, 10);
      }
    } catch (error) {
      const errorMessage = 'Internal Error';
      dispatch(onLogout(errorMessage));
      //dispatch(setErrorMessageAuth(errorMessage));
      //setTimeout(() => {
      //  dispatch(setErrorMessageAuth(undefined));
      //}, 10);
    }
  };
};

export const checkDocumentCc = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const documentCc = localStorage.getItem('documentCc');
    if (!documentCc) {
      dispatch(onLogout());
    } else {
      try {
        const data = await findUserByDocumentCc(documentCc);
        if (data.idUser) {
          dispatch(onLogin(data));
          localStorage.setItem('documentCc', documentCc);
        } else {
          dispatch(onLogout());
          dispatch(setErrorMessageAuth(data.error ? data.error : 'Internal Eror'));
          setTimeout(() => {
            dispatch(setErrorMessageAuth(undefined));
          }, 10);
        }
      } catch (error) {
        localStorage.clear();
        const errorMessage = 'Internal Error';
        dispatch(setErrorMessageAuth(errorMessage));
        setTimeout(() => {
          dispatch(setErrorMessageAuth(undefined));
        }, 10);
      }
    }
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    dispatch(onResetScoreData());
    localStorage.clear();
    dispatch(onLogout());
  };
};
