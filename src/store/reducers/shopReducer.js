import { SET_CART, SET_PAYMENT, SET_ADDRESS, ADD_TO_CART, UPDATE_CART_ITEM, TOGGLE_CART_ITEM, REMOVE_FROM_CART } from "../actions/shopActions";

const initialState = {
    cart: [], // Expecting: [{ count: 1, checked: true, product: {...} }]
    payment: {},
    address: {}
};

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const productToAdd = action.payload;
            
            // 1. Check if product already exists in the cart array
            const existingItemIndex = state.cart.findIndex(
                (item) => item.product.id === productToAdd.id
            );

            if (existingItemIndex !== -1) {
                // 2. If it exists, create a NEW array with the updated count
                const updatedCart = state.cart.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, count: item.count + 1 }
                        : item
                );
                return { ...state, cart: updatedCart };
            }

            // 3. If it's a new product, add it to the array with count: 1
            return {
                ...state,
                cart: [...state.cart, { count: 1, checked: true, product: productToAdd }]
            };
        }
        case UPDATE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload.productId
                        ? { ...item, count: Math.max(1, item.count + action.payload.change) }
                        : item
                )
            };

        case TOGGLE_CART_ITEM:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.product.id === action.payload
                        ? { ...item, checked: !item.checked }
                        : item
                )
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload)
            };

        case SET_CART:
            return {
                ...state,
                cart: action.payload
            };
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload
            };
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            };

            
        default:
            return state;
    }
};

export default shopReducer;