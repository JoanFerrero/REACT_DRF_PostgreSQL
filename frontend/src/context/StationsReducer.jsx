import { useNavigate } from "react-router-dom";

export default function StationsReducer(state, action) {
  switch(action.type) {
    case 'SET_STATIONS':
      return {
        ...state,
        stations: action.payload,
      };
    case 'ADD_STATIONS':
      return {
        ...state,
        stations: [...state.stations, action.payload],
      }
    case 'EDIT_STATION':
      return {
        ...state,
        stations: state.stations.map(item => {
          if(item.id === action.payload.id) {
            console.log(action.payload)
            return action.payload;
          }
          return item;
          })
      }
    case 'DELETE_STATION':
      return {
        ...state,
        stations: state.stations.filter(item => item.slug !== action.payload)
      }
    default:
      return state;
  }
}