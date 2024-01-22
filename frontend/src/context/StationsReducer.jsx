export default function StationsReducer(state, action) {
  switch(action.type) {
    case 'SET_STATIONS':
      return {
        ...state,
        stations: action.payload,
      };
    case 'ADD_STATIONS':
      console.log(action.payload)
      return {
        ...state,
        stations: [...state.stations, action.payload],
      }
    default:
      return state;
  }
}