import { findUserByDocumentCc } from '../../../src/helpers/findUserByDocumentCc';
import { checkingCredentials, onLogin, onLogout } from '../../../src/store/auth/authSlice';
import { startLogin, startLogout } from '../../../src/store/auth/thunks';
import { onResetPoints } from '../../../src/store/points/pointsSlice';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/helpers/findUserByDocumentCc');

describe('AuthThunks Tests', () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  it('startLogin  should call checkingCredentials and onLogin', async () => {
    const loginData = { ...demoUser };
    await findUserByDocumentCc.mockResolvedValue(loginData);
    await startLogin(demoUser.documentCc)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(onLogin(loginData));
  });

  it('startLogin  should call checkingCredentials and onLogout with error message', async () => {
    const loginData = { error: 'sorry, you need to register your CC document' };
    await findUserByDocumentCc.mockResolvedValue(loginData);
    await startLogin(8778745)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(onLogout(loginData.error));
  });

  it('startLogout should call checkingCredentials, onLogout and onResetPoints', async () => {
    await startLogout()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(onLogout());
    expect(dispatch).toHaveBeenCalledWith(onResetPoints());
  });
});
