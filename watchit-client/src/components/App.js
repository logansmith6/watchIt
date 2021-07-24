import React from 'react';

import Router from './Router'
import PostsContainer from './PostsContainer'

const App = () => {
    return (
      
      <div>
        <Router />
        <PostsContainer />
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
              <form class="example" action="action_page.php">
              <input type="text" placeholder="Search.." name="search"/>
              <button type="submit"><i class="fa fa-search"></i></button>
              </form>
        
      </div>
    )
}

export default App;
