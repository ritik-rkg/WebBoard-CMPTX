import {
    CREATE_BOARD_SUCCESS,
    CREATE_BOARD_ERRORED,
    CREATE_BOARD_LOADING,
    RESET_STORE
} from '../actions'

const initialState = {
    isLoading: false,
    hasErrored: false,
    board_id: null,
    status: 100
}

export default function boardReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_BOARD_LOADING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case CREATE_BOARD_SUCCESS: {
            return {
                ...state,
                board_id: action.board_id,
                status: action.status,
                isLoading: false
            }
        }
        case CREATE_BOARD_ERRORED: {
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