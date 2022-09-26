import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  RESET_STORE
} from '../actions'

const initialState = {
  isLoading: false,
  hasErrored: false,
  errorMsg: null,
  status: 100,
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        status: action.status,
        isLoading: false,
        hasErrored: false
      }
    }
    case LOGIN_ERROR: {
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