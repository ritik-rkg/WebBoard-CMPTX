import {
    CREATE_BOARD_SUCCESS,
    CREATE_BOARD_ERRORED,
    CREATE_BOARD_LOADING,
    RESET_STORE
  } from '../actions';
  import {API,routes} from 'API';
  
  export function createBoard(name) {
    return (dispatch, getState) => {
        dispatch(createBoardLoading(true));
        var params = {
            name: name,
            description: "some sample description"
        }
        API.post(routes.createBoard, params)
          .then(response => {
            if(response.status == 200) {
              dispatch(createBoardSuccess(response.data,response.status));
            }
          })
          .catch(error => {
            if(error.response){
              dispatch(createBoardErrored(true,error.status));
            }
            else{
              dispatch(createBoardErrored(true,50));
            }
          });
      };
  }
  
  export function createBoardLoading(bool) {
    return {
      type: CREATE_BOARD_LOADING,
      isLoading: bool
    };
  }
  
  export function createBoardErrored(bool, stat) {
    return {
      type: CREATE_BOARD_ERRORED,
      hasErrored: bool,
      status: stat,
    };
  }
  
  export function createBoardSuccess(data,stat) {
    return {
      type: CREATE_BOARD_SUCCESS,
      status: stat,
      board_id: data.board_id
    };
  }
  
//   export function signupClear() {
//     return {
//       type: RESET_STORE,
//       //   info: data,
//       //   status: stat
//     };
//   }