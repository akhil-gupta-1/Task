import { DashboardData } from '../constants';

export function fetchdataforuser() {
    return function (dispatch) {
        dispatch(UserRequest());
        let object = fetchUserDetails()
        if (object.statusCode === 200) {
            dispatch(UserSuccess(object));
        }
        else {
            dispatch(UserFailure(object));
        }
    };
}

export function UserRequest() {
    return { type: 'FETCH_REQUEST' }
}

export function UserSuccess(result) {
    return { type: 'FETCH_SUCCESS', result }
}

export function UserFailure(error) {
    return { type: 'FETCH_FAILURE', error }
}

function fetchUserDetails() {
    let responseBody = {};
    responseBody = {
        statusCode: 200,
        statusMessage: 'data fetched',
        data: DashboardData
    }
    return responseBody;
}