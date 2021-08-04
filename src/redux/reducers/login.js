import { getAllUserData, login } from "../../api/api";
import { getCartTC } from "./getCart";

const SET_USER = 'SET-USER';
const GET_LOGIN = 'GET-LOGIN';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
    token: null,
    userData: [],
    isFetching: false
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state, token: action.token
            }

        case GET_LOGIN:
            return {
                ...state, userData: [...state.userData, action.userData]
            }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        default:
            return state
    }
}

const setUserAC = (token) => ({ type: SET_USER, token })
const setLoginDataAC = (userData) => ({ type: GET_LOGIN, userData })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const setUserTC = (userData) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    let response = await login(userData)
    dispatch(setUserAC(response.data))
    dispatch(setUserData(userData.username))
    dispatch(toggleIsFetching(false))
}

const setUserData = (login) => async (dispatch) => {
    let response = await getAllUserData()
    return response.map(r => JSON.stringify(r.username) === JSON.stringify(login) ? dispatch(setLoginDataAC(r)) && dispatch(getCartTC(r.id)) : null)
}