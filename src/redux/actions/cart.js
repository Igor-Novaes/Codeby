export const addToCart = (item) => ({
  type: '@cart/ADD',
  payload: item,
});

export const editItem = (id, quantity) => ({
  type: '@cart/EDIT',
  payload: { id, quantity },
});

  
export const removeItem = (id) => ({
  type: '@cart/REMOVE',
  payload: { id },
});

export const clearCart = () => ({
  type: '@cart/CLEAR',
});
  