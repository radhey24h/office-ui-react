import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        }
    }
    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Listing</h2>
                {
                    posts.length ? (
                        posts.map((post, index) => {
                            return (
                                <div key={index}>
                                    <h2>{post.title}</h2>
                                    <p>{post.description}</p>
                                </div>
                            )
                        })
                    ) : (
                        <p>Post not found</p>
                    )
                }
            </div>
        )
    }
}

export default Post;
