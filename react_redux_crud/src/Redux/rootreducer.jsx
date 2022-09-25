import {combineReducers} from "redux"
import userReducers from "./reducer"
const rootreducer=combineReducers({
    users:userReducers
})

export default rootreducer