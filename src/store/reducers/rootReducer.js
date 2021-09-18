import { combineReducers } from "redux";
import auth from './authReducer';
import layoutReducer from "./layoutReducer"
const rootReducer = combineReducers({
    auth,
    layoutReducer
})

export default rootReducer;