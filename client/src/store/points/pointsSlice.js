import { createSlice } from '@reduxjs/toolkit';
const initialScore = {
  name: '',
  id: '',
  documentCc: '',
  score: 0,
};

export const pointsSlice = createSlice({
  name: 'points',

  initialState: {
    scoreData: initialScore,
    /*scoreData: initialScore,
    pointsAdded: undefined,
    pointsRedeem: undefined,*/
  },

  reducers: {
    setScoreData: (state, { payload }) => {
      state.scoreData = payload;
    },

    onResetScoreData: (state, { payload }) => {
      state.scoreData = undefined;
    },
    /*
    onPointsAdded: (state, { payload }) => {
      state.scoreData = { ...state.scoreData, score: +state.scoreData.score + +payload.points };
      state.pointsAdded = payload;
      state.pointsRedeem = undefined;
    },

    onPointsRedeem: (state, { payload }) => {
      state.scoreData = { ...state.scoreData, score: +state.scoreData.score - +payload.points };
      state.pointsAdded = undefined;
      state.pointsRedeem = payload;
    },

    onGetScore: (state, { payload }) => {
      state.scoreData = payload;
      state.pointsAdded = undefined;
      state.pointsRedeem = undefined;
    },

    onNewUserScore: (state, { payload }) => {
      state.scoreData = payload;
      state.pointsAdded = undefined;
      state.pointsRedeem = undefined;
    },
*/
  },
});

// Action creators are generated for each case reducer function
export const {
  setScoreData,
  onResetScoreData,
  /*onPointsAdded, onPointsRedeem, onGetScore, onNewUserScore,  */
} = pointsSlice.actions;
