export const usersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return action.payload
        case 'ADD_USER':
            return [...state, action.payload]
        case 'YOU_UP':
            return action.payload
        default: 
            return state
    }
}