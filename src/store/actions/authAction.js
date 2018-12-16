export const userSignIn = (credentials) => {
    console.log("credentials",credentials);
    return (dispatch) => {
        dispatch({ type: 'LOGIN_SUCCESS' });
    }
}

export const createNewUser = (createNewUser)=>{
    console.log("Action create user",createNewUser);

    return (dispatch)=>{
        dispatch({type:'SIGNUP_SUCCESS'})
    }
}