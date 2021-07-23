import { combineReducers } from 'redux'

import { usersReducer } from './usersReducer'
import { videosReducer } from './videosReducer'

export const rootReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer
})