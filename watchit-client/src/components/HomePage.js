import React from 'react';
import { connect } from 'react-redux';



const HomePage = ({posts}) => {
    return (
        <div>
            {posts.map(post => <ul><li key={post.id}>{post.title} {post.description} <video width='640' height='264' src={post.video.to_s} controls></video> </li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(HomePage);