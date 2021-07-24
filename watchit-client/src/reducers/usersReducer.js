export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'login':
            return action.payload
        case 'logout':
            return [...state, action.payload]
        
        default: 
            return state
    }
}