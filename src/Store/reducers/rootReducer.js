import { combineReducers } from 'redux'
import { GetDataFromUserUserReducer } from './Userreducer'
import { userReducers } from '../slice/UserSlice'
import { questionReducers } from '../slice/QuestionSlice'

export const rootReducer=combineReducers({
    userReducers:userReducers,
    questionReducers:questionReducers,
})