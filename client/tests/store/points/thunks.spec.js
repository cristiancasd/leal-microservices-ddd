import { lealAddApi, lealQueryApi, lealRedeemApi } from '../../../src/api';

import { setSuccessMessage } from '../../../src/store/common/commonSlice';
import { setScoreData } from '../../../src/store/points/pointsSlice';
import { startAddPoints, startGetPoints, startRedeemPoints } from '../../../src/store/points/thunks';
import {
  pointsAdded,
  pointsRedeemed,
  pointsToAdd,
  pointsToRedeem,
  userPointsState,
} from '../../fixtures/pointsFixtures';

jest.mock('../../../src/api/lealAddPointsApi');
jest.mock('../../../src/api/lealRedeemPointsApi');
jest.mock('../../../src/api/lealQueryApi');

describe('PointsThunks Tests', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  it('startAddPoints should call mockResolvedValue with OK resolve', async () => {
    const scoreData = { ...userPointsState.scoreData };
    getState.mockReturnValue({ points: { scoreData } });

    lealAddApi.post = jest.fn().mockResolvedValue({ data: pointsAdded });
    await startAddPoints(pointsToAdd)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(setSuccessMessage(`Points Added: 1000 | New Score: 2000`));
    expect(dispatch).toHaveBeenCalledWith(setScoreData({ ...scoreData, score: 2000 }));
  });

  it('startRedeemPoints should call mockResolvedValue with OK resolve', async () => {
    const scoreData = { ...userPointsState.scoreData };
    getState.mockReturnValue({ points: { scoreData } });

    lealRedeemApi.post = jest.fn().mockResolvedValue({ data: pointsRedeemed });
    await startRedeemPoints(pointsToRedeem)(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(setSuccessMessage(`Points Redeemed: 500 | New Score: 500`));
    expect(dispatch).toHaveBeenCalledWith(setScoreData({ ...scoreData, score: 500 }));
  });

  it('startGetPoints should call mockResolvedValue with OK resolve', async () => {
    const scoreData = { ...userPointsState.scoreData };
    lealQueryApi.get = jest.fn().mockResolvedValue({ data: scoreData });
    await startGetPoints(scoreData.documentCc)(dispatch);
    expect(dispatch).toHaveBeenCalledWith(setSuccessMessage(`My score: 1000`));
    expect(dispatch).toHaveBeenCalledWith(setScoreData(scoreData));
  });
});
