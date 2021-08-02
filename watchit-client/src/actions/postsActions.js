
export const fetchPosts = () => {
    return (dispatch) => {
        //resolve promise from fetch request by jsonifying it. 
        //jsonifying will return another promise, will resolve with second .then which will return users
        fetch("http://127.0.0.1:3001/posts")
        .then(resp => resp.json())
        .then(posts => dispatch({ type: 'FETCH_POSTS', payload: posts}))
    }
}

export const addPost = post => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3001/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {'Content-Type': 'application/json'}
            })
        .then(resp => resp.json())
        .then(post => dispatch({ type: 'ADD_POST', payload: post}))
    }
}
    