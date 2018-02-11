import * as actionTypes from '../actions/actionTypes';

const initialState = { time: -1, running: false };

const loadTimeFromLS = (action, state) => ({
  ...state,
  time: action.time,
  running: action.running
});

const reducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.READ_FROM_LOCAL_STORAGE:
      return loadTimeFromLS(state, action);
    default:
      return initialState;
  }
};

export default reducer;
