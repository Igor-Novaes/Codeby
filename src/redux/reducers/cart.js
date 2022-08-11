const localStorageCart = localStorage.getItem('persist:root');
const cart = localStorageCart && JSON.parse(JSON.parse(localStorageCart).cart);

const initialState = cart ? cart : [];

export default function func(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case '@cart/ADD':   
      if (state?.find(item=> item.id === payload.id))
      return {
        ...state,        
      };      
    case '@cart/EDIT':
        return {
        ...state,
    };
    case '@cart/REMOVE':
      return {
        ...state,
      };
    default:
      return state;
  }
}
