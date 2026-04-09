export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";

export const setCart = (cart) => ({
    type: SET_CART,
    payload: cart
});

// New Action Creator
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