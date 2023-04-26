import { lealQueryApi, lealRedeemApi } from '../../api';
import lealAddApi from '../../api/lealAddPointsApi';
import {
  clearErrorMessage,
  clearSuccessMessage,
  setErrorMessage,
  setIsCommunicating,
  setSuccessMessage,
} from '../common/commonSlice';
import { setScoreData } from './pointsSlice';
//import { onGetScore, onNewUserScore, onPointsAdded, onPointsRedeem } from './pointsSlice';

export const startAddPoints = (dataAdd) => {
  return async (dispatch, getState) => {
    dispatch(setIsCommunicating(true));
    try {
      const { scoreData } = getState().points;
      const { data } = await lealAddApi.post('/add/create', dataAdd);
      const newScore = +scoreData.score + +data.points;
      dispatch(setScoreData({ ...scoreData, score: newScore }));
      dispatch(setSuccessMessage(`Points Added: ${data.points} | New Score: ${newScore}`));
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
  return async (dispatch, getState) => {
    dispatch(setIsCommunicating(true));
    try {
      const { scoreData } = getState().points;

      const { data } = await lealRedeemApi.post('/redeem/create', dataRedeem);
      const newScore = +scoreData.score + -+data.points;
      dispatch(setScoreData({ ...scoreData, score: newScore }));

      dispatch(setSuccessMessage(`Points Redeemed: ${data.points} | New Score: ${newScore}`));
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
  return async (dispatch) => {
    dispatch(setIsCommunicating(true));
    try {
      const { data } = await lealQueryApi.get('/query/getbyid/' + documentCc);
      dispatch(setScoreData(data));
      dispatch(setSuccessMessage(`My score: ${data.score}`));
      setTimeout(() => {
        dispatch(clearSuccessMessage());
      }, 10);
    } catch (error) {
      dispatch(setErrorMessage(`My score: Error getting score`));
      setTimeout(() => {
        dispatch(clearErrorMessage(undefined));
      }, 10);
    }
    dispatch(setIsCommunicating(false));
  };
};

export const startGetInitalPoints = (documentCc) => {
  return async (dispatch, getState) => {
    dispatch(setIsCommunicating(true));
    try {
      const { data } = await lealQueryApi.get('/query/getbyid/' + documentCc);
      dispatch(setScoreData(data));
    } catch (error) {
      const { user } = getState().auth;
      const newScoreUser = {
        name: user.name,
        id: user.idUser,
        score: 0,
        documentCc: user.documentCc,
      };
      dispatch(setScoreData(newScoreUser));
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
