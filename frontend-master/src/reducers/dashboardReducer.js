import { GET_USER_INFO_SUCCESS,GET_USER_INFO_LOADING,GET_USER_INFO_ERRORED,RESET_STORE } from '../actions'

const initialState={
    isLoading : false,
    isFullLoading : false,
    hasErrored : false,
    info: null,
    status: 100
}

export default function dashboardReducer(state=initialState,action){
    switch(action.type){
        case GET_USER_INFO_LOADING:{
            return{
                ...state,
                isLoading: true
            }
        }
        case GET_USER_INFO_SUCCESS:{
            return{
                ...state,
                info: action.info,
                status: action.status,
                isLoading: false
            }
        }
        case GET_USER_INFO_ERRORED:{
            return{
                ...state,
                hasErrored : true,
                isLoading : false,
                status: action.status
            }
        }
        case RESET_STORE:{
            return{
                ...initialState
            }
        }
        default:
        return state
    }
}