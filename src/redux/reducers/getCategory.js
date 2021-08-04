import { getCategory, getSpecificCategory } from "../../api/api";

const SET_CATEGORY = 'SET-CATEGORY';
const SET_PRODUCTS_CATEGORY = 'SET-PRODUCTS-CATEGORY';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    category: [],
    categoryProducts: [],
    isFetching: false
}

export const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, category: action.category }

        case SET_PRODUCTS_CATEGORY:
            return {...state, categoryProducts: action.products}

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        default:
            return state
    }
}

const setCategoryAC = (category) => ({ type: SET_CATEGORY, category })
const setCategoryProductsAC = (products) => ({ type: SET_PRODUCTS_CATEGORY, products })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const getCategoryTC = () => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await getCategory()
    dispatch(setCategoryAC(response))
    dispatch(toggleIsFetching(false))
}

export const getSpecificCategoryTC = (category) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await getSpecificCategory(category)
    dispatch(setCategoryProductsAC(response))
    dispatch(toggleIsFetching(false))
}