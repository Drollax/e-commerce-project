import { API } from "../../api/axiosInstance";
import {toast} from "react-toastify";

export const SET_USER = "SET_USER";
export const SET_ROLES = "SET_ROLES";
export const SET_THEME = "SET_THEME";
export const SET_LANGUAGE = "SET_LANGUAGE";

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