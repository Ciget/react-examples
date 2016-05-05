import { combineReducers } from 'redux'
import {counter} from './counters'

const counterApp = combineReducers({
  counter
})

export default counterApp
