import React from 'react';
import { connect } from 'react-redux';
import './App';


const HomePage = ({posts}) => {
    return (
        <div class="browse">
            {posts.map(post => 
                <ul>
                    <a className="post-title" key={post.id}> 
                        <video width='320' height='180' src={post.video} controls></video>
                        <br/>
                        {post.title} {post.description} 
                    </a>
                </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(HomePage);