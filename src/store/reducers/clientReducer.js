import { API } from "../../api/axiosInstance";
import { SET_USER, SET_ROLES, SET_LANGUAGE, SET_THEME } from "../actions/clientActions";

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
        default:
            return state;
    }
}

export default clientReducer;