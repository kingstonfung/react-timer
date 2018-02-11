import * as actionTypes from './actionTypes';

/*
export const readFromLocalStorage = () => {
  return {
    type: actionTypes.READ_FROM_LOCAL_STORAGE
  };
};

export const writeToLocalStorage = () => {
  return {
    type: actionTypes.WRITE_TO_LOCAL_STORAGE
  };
};
*/

export const getTimeFromLS = () => {
  const timeData = localStorage.getItem('time') || 0;
  return parseFloat(timeData);
}

export const getRunningFromLS = () => {
  return localStorage.getItem('running') || false;
}

export const readLocalStorageTimeData = () => {
  return {
    type: actionTypes.READ_FROM_LOCAL_STORAGE,
    time: getTimeFromLS(),
    running: getRunningFromLS()
  };
}
