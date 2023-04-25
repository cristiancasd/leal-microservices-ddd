export const initialState = {
  status: 'checking', // 'checking', 'not-authenticated', 'authenticated'
  user: {},
  errorMessageAuth: undefined,
};

export const authenticatedState = {
  status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
  user: demoUser,
  errorMessageAuth: undefined,
};

export const notAuthenticatedState = {
  status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  idUser: 'cualquierUUID',
  name: 'fixture name',
  documentCc: 999888777,
};
