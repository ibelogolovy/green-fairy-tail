import actionTypes from '../constants/actionTypes';

const updateShowState = (state, action) => {

  if (state === undefined){
    return {
      showAboutCircle: false
    };
  };

  switch (action.type) {
    case actionTypes.OPEN_ABOUTCIRCLE:
      return {
        showAboutCircle: true
      };

    case actionTypes.CLOSE_ABOUTCIRCLE:
      return {
        showAboutCircle: false
      };

    default:
      return state.showState;
  }
};

export default updateShowState;
