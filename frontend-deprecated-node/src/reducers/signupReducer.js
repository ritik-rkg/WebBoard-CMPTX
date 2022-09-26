import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  RESET_STORE
} from '../actions'

const initialState = {
  isLoading: false,
  hasErrored: false,
  errorMsg: null,
  status: 100,
}

export default function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_LOADING: {
      return {
        ...state,
        isLoading: true
      }
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        status: action.status,
        isLoading: false,
        hasErrored: false
      }
    }
    case SIGNUP_ERROR: {
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