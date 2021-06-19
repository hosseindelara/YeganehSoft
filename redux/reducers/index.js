import {combineReducers} from "redux";
import {RefreshReduser} from './RefreshReduser'

export const baceUrlreducer = (baseUrl = 'http://localhost:3000/api', action) => baseUrl

export const reducers = combineReducers({
    refreshPage: RefreshReduser,
    baseUrl: baceUrlreducer,
  
})