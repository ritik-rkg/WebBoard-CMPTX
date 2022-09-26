import {
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  RESET_STORE
} from '../actions'

const initialState = {
  isLoading: false,
  hasErrored: false,
  errorMsg: null,
  status: 100,
}

export default function logoutReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        status: action.status,
        isLoading: false,
        hasErrored: false
      }
    }
    case LOGOUT_ERROR: {
      return {
        ...state,
        hasErrored: true,
        isLoading: false,
        status: action.status,
        errorMsg: action.errorMsg
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