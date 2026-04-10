import { SET_USER, SET_ROLES, SET_LANGUAGE, SET_THEME, SET_ADDRESS_LIST, SET_CREDIT_CARDS } from "../actions/clientActions";

const initialstate = {
    user: {},
    addressList: [],
    creditCard: [],
    roles: [],
    theme: "",
    language:""
}

const clientReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case SET_ROLES:
            return {
                ...state,
                roles: action.payload
            };
        case SET_THEME:
            return {
                ...state,
                theme: action.payload
            };
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        
        case SET_ADDRESS_LIST:
            return { ...state, addressList: action.payload };
       
        case SET_CREDIT_CARDS:
            return { ...state, creditCard: action.payload };
        
        default:
            return state;
    }
}

export default clientReducer;