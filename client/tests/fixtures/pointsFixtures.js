export const initialState = {
  name: '',
  id: '',
  documentCc: '',
  score: 0,
};

export const undefinedScore = undefined;

export const userPointsState = {
  scoreData: {
    name: 'Some User',
    id: '787sdsdf',
    documentCc: 7856521,
    score: 1000,
  },
};

export const pointsToAdd = {
  //input to startAddPoints
  documentCc: 7856521,
  name: 'Some User',
  points: 1000,
  detail: 'something',
  idUser: '787sdsdf',
};

export const pointsToRedeem = {
  //input to startRedeemPoints
  documentCc: 7856521,
  name: 'Some User',
  points: 500,
  detail: 'something',
  idUser: '787sdsdf',
};

export const pointsAdded = {
  documentCc: 7856521,
  name: 'Some User',
  points: 1000,
  detail: 'something',
  idUser: '787sdsdf',
};

export const pointsRedeemed = {
  documentCc: 7856521,
  name: 'Some User',
  points: 500,
  detail: 'something',
  idUser: '787sdsdf',
};
