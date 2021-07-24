import React from 'react';
import '../App.css'

import Router from './Router'
import PostsContainer from './PostsContainer'

const App = () => {
    return (
      
      <div>
        <Router />
        <PostsContainer />
      </div>
    )
}

export default App;
