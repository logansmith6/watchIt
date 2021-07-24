import React from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';

const HomePage = ({posts}) => {
    return (
        <div>
            {posts.map(post => <ul><li key={post.id}>{post.title} {post.description} <ReactPlayer url={post.video} /> </li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(HomePage);