export const addToCart = (item) => ({
  type: '@cart/ADD',
  payload: item,
});

export const editItem = (itemId, amount) => ({
  type: '@cart/EDIT',
  payload: { itemId, amount },
});

  
export const removeItem = (itemId) => ({
  type: '@cart/REMOVE',
});
  