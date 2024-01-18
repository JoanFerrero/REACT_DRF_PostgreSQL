export default function StationsReducer(state, action) {
  switch(action.type) {
    case 'SET_STATIONS':
      return {
        ...state,
        stations: action.payload,
      };
    case 'ADD_STATIONS':
      return state;
    default:
      return state;
  }
}