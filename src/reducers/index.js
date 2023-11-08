
import { combineReducers } from "redux"
import registerReducer from "./registerReducer"
import loginReducer from "./loginReducers"
import forgotPasswordReducers from "./forgotPasswordReducers"


const rootReducer = combineReducers({
    registerReducer,
    loginReducer,
    forgotPasswordReducers
})

export default rootReducer
