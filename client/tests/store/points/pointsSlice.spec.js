import { onResetScoreData, pointsSlice, setScoreData } from '../../../src/store/points/pointsSlice';
import { initialState, undefinedScore, userPointsState } from '../../fixtures/pointsFixtures';

describe('pointsSlice test', () => {
  it('should return the initial state and be named "points"', () => {
    const state = pointsSlice.reducer(initialState, {});
    expect(state).toEqual(initialState);
    expect(pointsSlice.name).toBe('points');
  });

  it('onResetScoreData - Should assign undefined to the states', () => {
    const state = pointsSlice.reducer(userPointsState, onResetScoreData());
    expect(state).toEqual({
      scoreData: undefined,
    });
  });

  it('setScoreData - Should assign the score to the store', () => {
    const state = pointsSlice.reducer(undefinedScore, setScoreData(userPointsState));
    expect(state).toEqual({
      scoreData: userPointsState,
    });
  });
});
