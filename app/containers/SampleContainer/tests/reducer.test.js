
import { fromJS } from 'immutable';
import sampleContainerReducer from '../reducer';

describe('sampleContainerReducer', () => {
  it('returns the initial state', () => {
    expect(sampleContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
