import { API } from "../../api/axiosInstance";
import {toast} from "react-toastify";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
export const SET_CREDIT_CARDS = "SET_CREDIT_CARDS";

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme
});

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language
});

export const setAddressList = (addressList) => ({
    type: SET_ADDRESS_LIST,
    payload: addressList
});

export const setCreditCards = (cards) => ({
    type: SET_CREDIT_CARDS,
    payload: cards
});

export const fetchRoles = () => (dispatch, getState) => {
  const { roles } = getState().client;
  if (roles.length > 0) return; 

  API.get("/roles")
    .then(res => dispatch(setRoles(res.data)))
    .catch(err => console.error("Roles fetch error:", err));
};

export const loginUser = (loginData, history, rememberMe) => (dispatch) => {
  API.post("/login", loginData)
    .then(res => {
    console.log("Login response:", res.data);
      dispatch(setUser(res.data));
      
      if (rememberMe) {
        localStorage.setItem("token", res.data.token);
        API.defaults.headers.common['Authorization'] = res.data.token;
      }
      toast.success("Login successful!");
      if (history > 0){
        history.goBack();
      } else {
        history.push("/");
      }
    })
    .catch(err => {console.error("Login error:", err);
      toast.error("Login failed!");
    });
};

export const verifyToken = () => (dispatch) => {
  const token = localStorage.getItem("token");

  if (!token) return;

  return API.get("/verify")
    .then((res) => {
      
      // 1. Put User object to reducer
      dispatch(setUser(res.data));
      
      // 2. Renew token in localStorage
      localStorage.setItem("token", res.data.token);
      
      // Note: Interceptor handles the axios header renewal automatically
    })
    .catch((err) => {
      console.error("Token verification failed:", err);
      
    if (err.response && err.response.status === 401) {
        localStorage.removeItem("token");
}});
};

export const fetchCards = () => (dispatch) => {
    API.get("/user/card")
        .then(res => dispatch(setCreditCards(res.data)))
        .catch(err => console.error("Error fetching cards:", err));
};

