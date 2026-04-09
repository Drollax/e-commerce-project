import { API } from "../../api/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";

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

export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState
});

export const setSelectedProduct = (product) => ({
    type: SET_SELECTED_PRODUCT,
    payload: product
});

export const fetchProductDetail = (productId) => (dispatch) => {
    dispatch(setFetchState("FETCHING"));
    return API.get(`/products/${productId}`)
        .then((res) => {
            dispatch(setSelectedProduct(res.data));
            dispatch(setFetchState("FETCHED"));
        })
        .catch((err) => {
            console.error(err);
            dispatch(setFetchState("NOT_FETCHED"));
        });
};

export const fetchCategories = () => (dispatch) => {
    

  API.get("/categories")
    .then(res => dispatch(setCategories(res.data)))
    .catch(err => console.error("Categories fetch error:", err));
}

export const fetchProducts = (category, filter, sort, limit = 25, offset = 0) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));

  const params = new URLSearchParams();
  
  if (category) params.append("category", category);
  if (filter) params.append("filter", filter);
  if (sort) params.append("sort", sort);
  
  params.append("limit", limit);
  params.append("offset", offset);

  return API.get(`/products?${params.toString()}`)
    .then((res) => {
      dispatch(setProductList(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      dispatch(setFetchState("NOT_FETCHED"));
    });
};
