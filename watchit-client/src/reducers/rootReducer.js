import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { videosReducer } from './videosReducer'

//combineReducers- creates keys inside of store that return the 
//~ value of the state set by each reducer
export const rootReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer
})