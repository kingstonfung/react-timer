import * as actionTypes from '../actions/actionTypes';

const initialState = { time: 0, running: false, timerRef: -1 };

const loadTimeFromLS = (action, state) => ({
  ...state,
  time: action.time,
  running: action.running,
  timerRef: action.timerRef
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.READ_FROM_LOCAL_STORAGE:
      return loadTimeFromLS(state, action);
    default:
      return initialState;
  }
};

export default reducer;
