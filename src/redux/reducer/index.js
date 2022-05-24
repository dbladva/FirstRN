import { combineReducers } from "redux";
import { productReducer } from "./product.reducer";

const RootReducer = combineReducers ({
    ProductData : productReducer
})
export default RootReducer;