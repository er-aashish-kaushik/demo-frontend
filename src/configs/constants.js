export const GENERAL = {
    ACCESS_TOKEN_KEY: "accessToken",
    REFRESH_TOKEN_KEY: "refreshToken",
    BEARER_KEY: "Bearer",
}

export const REGISTER = {
    TITLE: "Sign Up",
    SUBMIT_BTN: "Register",
    FIRST_NAME_ID: "firstName",
    FIRST_NAME_LABEL: "First Name",
    FIRST_NAME_REQUIRED_MSG: "First name is required",
    LAST_NAME_ID: "lastName",
    LAST_NAME_LABEL: "Last Name",
    LAST_NAME_REQUIRED_MSG: "Last name is required",
    EMAIL: {
        ID: "email",
        LABEL: "Email",
        REQUIRED_MSG: "Email is required",
        PATTERN: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    PASSWORD: {
        ID: "password",
        LABEL: "Password",
        REQUIRED_MSG: "Password is required",
        MIN_LENGTH: 8,
    },
    CONFIRM_PASSWORD: {
        ID: "cpassword",
        LABEL: "Confirm Password",
        REQUIRED_MSG: "Confirm password is required",
        MIN_LENGTH: 8,
    },

}

export const LOGIN = {
    TITLE: "Log In",
    SUBMIT_BTN: "Log In",
    EMAIL: {
        ID: "email",
        LABEL: "Email",
        REQUIRED_MSG: "Email is required",
        PATTERN: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    PASSWORD: {
        ID: "password",
        LABEL: "Password",
        REQUIRED_MSG: "Password is required",
        MIN_LENGTH: 8,
    },
}