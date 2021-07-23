//will house actions to interact with api (users). these are async calls to the API


export const fetchUser = () => (
    return (dispatch) => {
        //resolve promise from fetch request by jsonifying it. 
        //jsonifying will return another promise, will resolve with second .then which will return users
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(users => console.log('fetchUsers', users))
    }
)
