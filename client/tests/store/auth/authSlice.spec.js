import { authSlice, checkingCredentials, onLogin, onLogout } from '../../../src/store/auth/authSlice';
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures';

describe('authSlice test', () => {
  it('should return the initial state and be named "auth"', () => {
    const state = authSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
    expect(authSlice.name).toBe('auth');
  });

  it('onLogin - Should assign the "authenticated" status and define the user', () => {
    const state = authSlice.reducer(initialState, onLogin(demoUser));
    expect(state).toEqual({
      status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
      user: {
        idUser: demoUser.idUser,
        name: demoUser.name,
        documentCc: demoUser.documentCc,
      },
      errorMessageAuth: undefined,
    });
  });

  it('onLogout - should do the logout without arguments', () => {
    const state = authSlice.reducer(authenticatedState, onLogout());
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessageAuth: undefined,
    });
  });

  it('onLogout - should do the logout and assign the error message', () => {
    // authenticatedState // logout con argumentos
    const errorMessage = 'Credenciales no son correctas';

    const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
    expect(state).toEqual({
      status: 'not-authenticated',
      user: {},
      errorMessageAuth: errorMessage,
    });
  });

  it('checkingCredentials - should change the status to "checking"', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    expect(state.status).toBe('checking');
  });
});
