import * as actionTypes from './actionTypes';

export const setTimerToRun = (setToRun, timerRef) => {
  const actionType = (setToRun)
    ? actionTypes.TIMER_START
    : actionTypes.TIMER_STOP;

  let timer;
  if (setToRun) {
    timer = setInterval(() => {
      // console.log('here', +new Date());
    }, 500);
  } else if (!setToRun && typeof timerRef !== 'undefined') {
    console.log('timerRef', timerRef);
    clearInterval(timerRef);
  }

  // console.log('actionType', actionType);
  // console.log('setToRun', setToRun);
  // console.log('timerRef', timer);

  return {
    type: actionType,
    running: setToRun,
    timerRef: timer
  };
};

export const getTimeFromLS = () => {
  const timeData = localStorage.getItem('time') || 0;
  return parseFloat(timeData);
}

export const getRunningFromLS = () => {
  return localStorage.getItem('running') || false;
}

export const readLocalStorageTimeData = () => ({
  type: actionTypes.READ_FROM_LOCAL_STORAGE,
  time: getTimeFromLS(),
  running: getRunningFromLS()
});
