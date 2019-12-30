import { ActionType } from '../constants';

export const toggleTest = test => ({
  type: ActionType.TEST,
  test,
});

export const test2 = relatedCompetitor => ({
  type: ActionType.TEST,
  relatedCompetitor,
});
