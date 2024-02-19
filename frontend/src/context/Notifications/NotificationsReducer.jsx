export default function NotificationsReducer(state, action) {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return {
        ...state,
        notifications: action.payload,
      };
    case 'DELETE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
}