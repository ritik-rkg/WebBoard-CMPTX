import {
    GET_USER_COURSES_SUCCESS,
    GET_USER_COURSES_ERRORED,
    GET_USER_COURSES_LOADING,
    RESET_STORE
} from '../actions'

const initialState = {
    isLoading: false,
    hasErrored: false,
    courselist: null,
    status: 100
}

export default function courselistReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_COURSES_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case GET_USER_COURSES_SUCCESS: {
            return {
                ...state,
                courselist: action.courselist,
                status: action.status,
                isLoading: false
            }
        }
        case GET_USER_COURSES_ERRORED: {
            return {
                ...state,
                hasErrored: true,
                isLoading: false,
                status: action.status
            }
        }
        case RESET_STORE: {
            return {
                ...initialState
            }
        }
        default:
            return state
    }
}