// reducers/index.js

import {
    SELECT_SUB_EMAIL,
    SELECT_LOGIN_EMAIL,
    SELECT_LOGIN_PASSWORD,
    SELECT_SIGNUP_EMAIL,
    SELECT_SIGNUP_PASSWORD,
    SELECT_SIGNUP_USERNAME
} from '../actions';

export const subscribe = (state = {
    subEmail: null
}, action) => {
    switch (action.type) {
        case SELECT_SUB_EMAIL:
            return {
                ...state,
                subEmail: action.subEmail
            }
        default: 
            return state;
    }
}

export const login = (state = {
    loginEmail: null,
    loginPassword: null
}, action) => {
    switch (action.type) {
        case SELECT_LOGIN_EMAIL:
            return {
                ...state,
                loginEmail: action.loginEmail
            }
         case SELECT_LOGIN_PASSWORD:
            return {
                ...state,
                loginPassword: action.loginPassword
            }
         default:
            return state;
    }
}

export const signUp = (state = {
    signUpEmail: null,
    signUpPassword: null,
    signUpUsername: null
}, action) => {
    switch (action.type) {
        case SELECT_SIGNUP_EMAIL:
            return {
                ...state,
                signUpEmail: action.signUpEmail
            }
        case SELECT_SIGNUP_PASSWORD:
            return {
                ...state,
                signUpPassword: action.signUpPassword
            }
        case SELECT_SIGNUP_USERNAME:
            return {
                ...state,
                signUpUsername: action.signUpUsername
            }
        default:
            return state;
    }
}
