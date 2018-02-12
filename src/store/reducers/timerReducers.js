import * as actionTypes from '../actions/actionTypes';

const initialState = { time: 0, running: false, timerRef: -1 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TIMER_START:
      return {
        ...state,
        running: action.running,
        timerRef: action.timerRef
      };
    case actionTypes.TIMER_STOP:
      return {
        ...state,
        running: action.running,
        timerRef: action.timerRef
      };
    case actionTypes.READ_FROM_LOCAL_STORAGE:
      return {
        ...state,
        time: action.time,
        running: action.running,
        timerRef: action.timerRef
      }
    default:
      return initialState;
  }
};

export default reducer;
