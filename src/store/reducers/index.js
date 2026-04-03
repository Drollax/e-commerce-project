import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shop: shopReducer
})

export default rootReducer;