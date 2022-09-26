import {GET_RESPONSE_STATUS} from '../actions';

export function getErrorResponse(status){
    return{
        type: GET_RESPONSE_STATUS,
        status: status,
        // message : message
    }
}