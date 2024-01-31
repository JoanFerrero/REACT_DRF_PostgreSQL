export default function AuthReducer(state, action) {
  switch(action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_IS_AUTH':
      return {
        ...state,
        isAuth: action.payload,
      }
    case 'SET_IS_ADMIN':
      return {
        ...state,
        isAdmin: action.payload,
      }
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      }
    default:
      return state;
  }
}