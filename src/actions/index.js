// actions/index.js

export const SELECT_SUB_EMAIL = 'SELECT_SUB_EMAIL';
export const SELECT_LOGIN_EMAIL = 'SELECT_LOGIN_EMAIL';
export const SELECT_LOGIN_PASSWORD = 'SELECT_LOGIN_PASSWORD';
export const SELECT_SIGNUP_EMAIL = 'SELECT_SIGNUP_EMAIL';
export const SELECT_SIGNUP_PASSWORD = 'SELECT_SIGNUP_PASSWORD';
export const SELECT_SIGNUP_USERNAME = 'SELECT_SIGNUP_USERNAME';

export const selectSubEmail = (subEmail) => ({
    type: SELECT_SUB_EMAIL,
    subEmail
});

export const selectLoginEmail = (loginEmail) => ({
    type: SELECT_LOGIN_EMAIL,
    loginEmail
});

export const selectLoginPassword = (loginPassword) => ({
    type: SELECT_LOGIN_PASSWORD,
    loginPassword
});

export const selectSignUpEmail = (signUpEmail) => ({
    type: SELECT_SIGNUP_EMAIL,
    signUpEmail
});

export const selectSignUpPassword = (signUpPassword) => ({
    type: SELECT_SIGNUP_PASSWORD,
    signUpPassword
});

export const selectSignUpUsername = (signUpUsername) => ({
    type: SELECT_SIGNUP_USERNAME,
    signUpUsername
})
