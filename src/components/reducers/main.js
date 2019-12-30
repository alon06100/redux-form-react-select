import { ActionType } from '../constants';

const initialState = {
  test: true,
};

const Main = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TEST:
      return {
        ...state,
        test: action.test,
      };
    default:
      return { ...state };
  }
};

export default Main;
