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

export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length > 0) return; 

  API.get("/roles")
    .then(res => dispatch(setRoles(res.data)))
    .catch(err => console.error("Roles fetch error:", err));
};

export default clientReducer;