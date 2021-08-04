import { detailProducts, getProducts } from "../../api/api";

const GET_PRODUCTS = 'GET-PRODUCTS';
const GET_PRODUCT = 'GET-PRODUCT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    products: [],
    product: [], 
    isFetching: false
}

export const ProductsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.products }
            
        case GET_PRODUCT:
            return { ...state, product: action.product }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
            
        default:
            return state
    }
}

const getProductsAC = (products) => ({ type: GET_PRODUCTS, products })
const getProductAC = (product) => ({ type: GET_PRODUCT, product })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getProductsTC = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await getProducts()
    dispatch(getProductsAC(response))
    dispatch(toggleIsFetching(false))
}

export const detailProductsTC = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await detailProducts(id)
    dispatch(getProductAC(response))
    dispatch(toggleIsFetching(false))
}