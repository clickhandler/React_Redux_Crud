//Write the ActionCreator functions here
import axios from "axios";
import * as types from "./actionType";

const GetWatch = (queryParams) => (dispatch) => {
  dispatch({ type: types.GET_WATCHES_DATA_REQUEST });
  return axios
    .get(`http://localhost:8080/watches`,queryParams)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: types.GET_WATCHES_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: types.GET_WATCHES_DATA_FAILURE });
    });
};

export { GetWatch };
