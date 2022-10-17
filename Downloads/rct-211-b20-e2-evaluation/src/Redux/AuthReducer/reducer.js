// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes"
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch(type){

    case types.LOGIN_REQUEST:
      return{
        isAuth:false,
        isLoading:true,
        isError:false
      }

      case types.LOGIN_SUCCESS:
      return{
        isAuth:true,
        isLoading:false,
        isError:false,
        token:payload
      }

      case types.LOGIN_FAILURE:
      return{
        isAuth:false,
        isLoading:false,
        isError:true,
        token:""
      }
    default:
    return state
  }
};

export { reducer };
