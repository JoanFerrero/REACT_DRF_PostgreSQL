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
        isAuth: true
      }
    case 'SET_IS_NOT_AUTH':
      return {
        ...state,
        isAuth: false
      }
    case 'SET_IS_ADMIN':
      return {
        ...state,
        isAdmin: true
      }
    case 'SET_IS_NOT_ADMIN':
      return {
        ...state,
        isAdmin: false
      }
    default:
      return state;
  }
}