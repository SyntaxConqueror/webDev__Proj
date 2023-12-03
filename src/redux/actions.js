export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
});

export const addToProducts = (product) => ({
    type: 'ADD_TO_PRODUCTS',
    payload: product,
});

export const removeFromProducts = (productId) => ({
    type: 'REMOVE_FROM_PRODUCTS',
    payload: productId,
});