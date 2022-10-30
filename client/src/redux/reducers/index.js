import {addItems} from "./addItem";
import {getProductReducer} from "./addItem"
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    addItems: addItems,
    getproductsdata: getProductReducer
})

export default rootReducers