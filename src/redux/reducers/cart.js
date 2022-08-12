const localStorageCart = localStorage.getItem('persist:root');
const cart = localStorageCart && JSON.parse(JSON.parse(localStorageCart).cart);

const initialState = cart ? cart : [];

export default function func(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case '@cart/ADD':   
      if (state?.find(item=> item.id === payload.id))
      return state
      else return [
        ...state,        
        payload
      ];    

    case '@cart/EDIT':   
      const currentItem = state?.findIndex((item)=>item.id === payload.id)
      if (currentItem !== -1){
        let tempState = state
        tempState[currentItem].quantity = payload?.quantity && payload?.quantity > 0 ? payload.quantity : 1
        console.log(tempState)
        return [...tempState]
      }  
      return state

    case '@cart/REMOVE':    
      return state.filter(item=>item.id !== payload.id)
    
    case '@cart/CLEAR':    
    return []
  
    default:
      return state;
  }
}
