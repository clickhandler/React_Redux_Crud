import {legacy_createStore,applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import rootreducer from "./rootreducer"


const middleware= [thunk]
if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}

const store=legacy_createStore(rootreducer,applyMiddleware(...middleware))

export default store;