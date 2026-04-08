import { API } from "../../api/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
});

export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter
});

export const fetchCategories = () => (dispatch) => {
  API.get("/categories")
    .then(res => dispatch(setCategories(res.data)))
    .catch(err => console.error("Categories fetch error:", err));
}