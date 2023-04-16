import { lealQueryApi, lealRedeemApi } from '../../api';
import lealAddApi from '../../api/lealAddPointsApi';
import {
  clearErrorMessage,
  clearSuccessMessage,
  setErrorMessage,
  setIsCommunicating,
  setSuccessMessage,
} from '../common/commonSlice';
import { onGetScore, onNewUserScore, onPointsAdded, onPointsRedeem } from './pointsSlice';

export const startAddPoints = (dataAdd) => {
  return async (dispatch) => {
    dispatch(setIsCommunicating(true));
    try {
      console.log('data to post ', dataAdd);
      const { data } = await lealAddApi.post('/add/create', dataAdd);
      dispatch(onPointsAdded(data));
      console.log('data obtenida cuando adicionamos ', data);
      dispatch(setSuccessMessage(`Points Added: ${data.points}`));
      setTimeout(() => {
        dispatch(clearSuccessMessage());
      }, 10);
    } catch (error) {
      const errorMessage = existError(error);
      dispatch(setErrorMessage(errorMessage));
      setTimeout(() => {
        dispatch(clearErrorMessage(undefined));
      }, 10);
    }
    dispatch(setIsCommunicating(false));
  };
};

export const startRedeemPoints = (dataRedeem) => {
  return async (dispatch) => {
    dispatch(setIsCommunicating(true));
    try {
      console.log('data to redeem ', dataRedeem);
      const { data } = await lealRedeemApi.post('/redeem/create', dataRedeem);
      dispatch(onPointsRedeem(data));
      console.log('data obtenida cuando redeem ', data);
      dispatch(setSuccessMessage(`Points Redeem: ${data.points}`));
      setTimeout(() => {
        dispatch(clearSuccessMessage());
      }, 10);
    } catch (error) {
      const errorMessage = existError(error);
      dispatch(setErrorMessage(errorMessage));
      setTimeout(() => {
        dispatch(clearErrorMessage(undefined));
      }, 10);
    }
    dispatch(setIsCommunicating(false));
  };
};

export const startGetPoints = (documentCc) => {
  return async (dispatch, getState) => {
    dispatch(setIsCommunicating(true));
    try {
      const { data } = await lealQueryApi.get('/query/getbyid/' + documentCc);
      dispatch(onGetScore(data));
      dispatch(setSuccessMessage(`My score: ${data.score}`));
      setTimeout(() => {
        dispatch(clearSuccessMessage());
      }, 10);
    } catch (error) {
      dispatch(setSuccessMessage(`My score: 0`));
    }
    dispatch(setIsCommunicating(false));
  };
};

export const startGetInitalPoints = (documentCc) => {
  return async (dispatch, getState) => {
    dispatch(setIsCommunicating(true));
    try {
      const { data } = await lealQueryApi.get('/query/getbyid/' + documentCc);
      dispatch(onGetScore(data));
    } catch (error) {
      const { user } = getState().auth;
      const newScoreUser = {
        name: user.name,
        id: user.idUser,
        score: 0,
        documentCc: user.documentCc,
      };
      dispatch(onNewUserScore(newScoreUser));
      const errorMessage = existError(error);
      dispatch(setErrorMessage(errorMessage));
      setTimeout(() => {
        dispatch(clearErrorMessage(undefined));
      }, 10);
    }
    dispatch(setIsCommunicating(false));
  };
};

const existError = (error) => {
  console.log('error ', error);
  try {
    return error.response ? error.response.data.errors[0].message : 'Network Error Backend';
  } catch {
    return 'ERROR BACKEND, message dont exist';
  }
};
