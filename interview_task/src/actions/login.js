import {userDetails} from '../constants';

export function ValidateUser(name, password){
    return function(dispatch){
        dispatch(loginUserRequest());
        let object = ValidateUserDetails(name,password)
        //.then(response => response.json())
            if(object.statusCode === 200){
                dispatch(loginUserSuccess(object));
            }
            else{
                dispatch(loginUserFailure(object    ));
            }
    };
}

export function loginUserRequest(){
    return { type:'LOGIN_REQUEST'}
}

export function loginUserSuccess(result){
    return { type:'LOGIN_SUCCESS', result}
}

export function loginUserFailure(error){
    return { type:'LOGIN_FAILURE', error}
}

function ValidateUserDetails(name, password){
    let responseBody={}, session={};
    if(name=== userDetails.username && password === userDetails.password){
        session ={
            UserName:name,
            isAuthenticated: true
        }
        responseBody = {
            statusCode: 200,
            statusMessage: 'User Authenticated',
            session: session
        }
    }
    else {
        session ={
            isAuthenticated: false
        }
        responseBody = {
            statusCode: 404,
            statusMessage: 'Login failed',
            session: session
        }
    }
    return responseBody;
}