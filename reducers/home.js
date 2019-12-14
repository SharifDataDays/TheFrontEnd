const homeState = {
  homeContext: '',
  trophyChanged: -1,
};

const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    case 'SELECT_TIMELINE':
      return {
        ...state,
        homeContext: action.context,
      };
    case 'TROPHY_STARTED':
      return {
        ...state,
        trophyChanged: action.place,
      };
    default:
      return state;
  }
};

export default homeReducer;
