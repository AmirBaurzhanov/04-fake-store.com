import { addProduct, getCart } from "../../api/api";

const GET_CART_DATA = 'GET-CART-DATA';
const SET_CART_DATA = 'SET-CART-DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    cart: [],
    cartProducts: [],
    isFetching: false
}

export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CART_DATA:
            return {
                ...state, cart: action.cart
            }

        case SET_CART_DATA:
            return {
                ...state, cartProducts: [...state.cartProducts, action.cartProduct]
            }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        default:
            return state
    }
}

const getCartAC = (cart) => ({ type: GET_CART_DATA, cart })
const setCartProductsAC = (cartProduct) => ({ type: SET_CART_DATA, cartProduct })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getCartTC = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await getCart(id)
    dispatch(getCartAC(response))
    dispatch(toggleIsFetching(false))
}

export const addProductTC = (userId, productId, quantity) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await addProduct(userId, productId, quantity)
    dispatch(getCartAC(response.data.products))
    dispatch(toggleIsFetching(false))
}

export const checkCartTC = (cartProduct) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCartProductsAC(cartProduct))
    dispatch(toggleIsFetching(false))
}