import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { CartReducer } from "./reducers/getCart";
import { CategoryReducer } from "./reducers/getCategory";
import { ProductsReducer } from "./reducers/getProductsReducer";
import { LoginReducer } from "./reducers/login";

let reducer = combineReducers({
    products: ProductsReducer,
    category: CategoryReducer,
    cart: CartReducer,
    user: LoginReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))

export default store;