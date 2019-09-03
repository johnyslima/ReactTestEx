import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import { reducer as companiesReducer } from "./companiesRedux";

const rootReducer = combineReducers({
    companiesReducer, 
    form
})
export default rootReducer