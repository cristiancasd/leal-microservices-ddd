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
        dispatch(onLogout());
        dispatch(setErrorMessageAuth(data.error ? data.error : 'Internal Eror'));
        setTimeout(() => {
          dispatch(setErrorMessageAuth(undefined));
        }, 10);
      }
    } catch (error) {
      const errorMessage = 'Internal Error';
      dispatch(onLogout());
      dispatch(setErrorMessageAuth(errorMessage));
      setTimeout(() => {
        dispatch(setErrorMessageAuth(undefined));
      }, 10);
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
    localStorage.clear();
    dispatch(onLogout());
  };
};

const findUserByDocumentCc = async (documentCc) => {
  const dbUsers = [
    {
      idUser: '489c1e30-d566-4c48-aac2-9ca14996f404',
      documentCc: 1234,
      name: 'clemencio',
    },
    {
      idUser: '2241eb9b-9adf-403e-bd0f-6d00c4759e49',
      documentCc: 4444,
      name: 'ramiro',
    },
  ];

  let match = dbUsers.filter((element) => element.documentCc === +documentCc);

  return match[0] ? match[0] : { error: 'sorry, you need to register your CC document' };
};
