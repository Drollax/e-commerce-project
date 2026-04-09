export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_CART_ITEM = "TOGGLE_CART_ITEM";


export const updateCartItemPiece = (productId, change) => ({
    type: UPDATE_CART_ITEM,
    payload: { productId, change } // change will be +1 or -1
});

export const toggleCartItem = (productId) => ({
    type: TOGGLE_CART_ITEM,
    payload: productId
});

export const removeFromCartCompletely = (productId) => ({
    type: REMOVE_FROM_CART,
    payload: productId
});

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart
});

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});

export const setPayment = (payment) => ({
    type: SET_PAYMENT,
    payload: payment
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address
});