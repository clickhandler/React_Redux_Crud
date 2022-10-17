// NOTE: use this store variable to create a store.

import {legacy_createStore,combineReducers, applyMiddleware} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"
import { reducer as Appreducer } from "./AppReducer/reducer";
import {reducer as Authreducer} from "./AuthReducer/reducer"


const rootReducer=combineReducers({Appreducer,Authreducer})
const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
