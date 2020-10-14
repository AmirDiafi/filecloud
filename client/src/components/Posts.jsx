import React from 'react'
import Wait from './Wait'
import Post from './Post'

class Posts extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="the-posts">
                {this.props.posts.length!==0
                ?this.props.posts.map(post=>
                    <Post 
                        key={post.id} 
                        data={post}
                        route='media/'
                        handleSearch={this.props.handleSearch}
                    />
                )
                :<Wait />}
          </div>
         )
    }
}
 
export default Posts;