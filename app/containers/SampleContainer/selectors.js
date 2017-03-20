import { createSelector } from 'reselect';

/**
 * Direct selector to the sampleContainer state domain
 */
const selectSampleContainerDomain = () => (state) => state.get('sampleContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SampleContainer
 */

const makeSelectSampleContainer = () => createSelector(
  selectSampleContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSampleContainer;
export {
  selectSampleContainerDomain,
};
